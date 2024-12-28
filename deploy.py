import os
import subprocess
import semver
from git import Repo

PORTFOLIO_PATH = '/Users/ca/Developer/Projects/Portfolio'
BRANCH = 'main'


def update_client_version():
    os.chdir(PORTFOLIO_PATH + '/client')

    # output project version and capture it in client_version
    client_version = os.popen(
        'node -p "require(\'./package.json\').version"').read()

    ver = semver.Version.parse(client_version)

    answer = input(
        f"The current version is {ver}, specify the next version: ")

    match (answer):
        case 'major':
            ver = ver.bump_major()
        case 'minor':
            ver = ver.bump_minor()
        case 'patch':
            ver = ver.bump_patch()
        case _:
            print('Not valid semver semantics.')
            exit(1)

    os.system(f'npm version {ver} -m "New Version {ver}"')


def build_client():
    os.chdir(PORTFOLIO_PATH + '/client')

    try:
        subprocess.call(['npm', 'run', 'lint'])
        subprocess.call(['npm', 'run', 'build'])
        os.system('rm -rf dist')
    except subprocess.CalledProcessError as e:
        print('Error building Client! [FAILED]')
        print(e.output)
        exit(1)


def push_changes():
    # check for latest changes
    os.chdir(PORTFOLIO_PATH)
    os.system(f"git pull origin {BRANCH}")

    # push any pending changes
    os.system('git add .')
    os.system('git commit -m "deploy"')
    os.system('git push')


def main():
    answer = input("Are you sure you want to deploy? (yes/no) [no]: ")

    # anything but yes
    if (answer != 'yes'):
        exit(0)

    if Repo(PORTFOLIO_PATH).active_branch.name != BRANCH:
        print(f"Not in {BRANCH} branch! [FAILED]")
        exit(1)

    update_client_version()
    build_client()
    push_changes()

    answer = input("Client or Server? (client/server) [both]: ")

    if (answer == '' or answer == 'client'):
        os.chdir(PORTFOLIO_PATH + '/client')
        os.system('railway up --detach')

    if (answer == '' or answer == 'server'):
        os.chdir(PORTFOLIO_PATH + '/server')
        os.system('railway up --detach')


if __name__ == '__main__':
    main()
