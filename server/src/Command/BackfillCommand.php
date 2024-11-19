<?php

namespace App\Command;

use App\Entity\Project;
use App\Entity\Tag;
use App\Repository\ProjectRepository;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'Backfill',
    description: 'This command backfills any collection.',
)]
class BackfillCommand extends Command
{
    public const PROJECTS = [
        [
            'title' => 'Vue Js Snippets (Vscode Extension)',
            'description' => 'Vuejs snippets to increase your productivity (supports vue 3). Has reached over 9,000 active users.',
            'site' => 'https://marketplace.visualstudio.com/items?itemName=devlos.vuejs-snippets',
            'source' => 'https://github.com/devloos/vuejs-snippets',
            'file' => null,
            'tags' => [
                'Vue.js',
                'Vscode',
                'Extensions',
            ]
        ],
        [
            'title' => 'Raycast Format JSON Extension',
            'description' => 'Formats a JSON file with a selected indentation. If the JSON is stringified, it will be parsed before formatting. Reached over 30k active users.',
            'site' => 'https://www.raycast.com/destiner/json-format',
            'source' => 'https://github.com/raycast/extensions/tree/de2627a96b88691ce3d523f23dc778a651cd8368/extensions/json-format',
            'file' => null,
            'tags' => [
                'React.js',
                'Typescript',
                'Raycast',
                'Extensions',
            ]
        ],
        [
            'title' => 'Terminal Snake Game',
            'description' => 'Developed a terminal-based Snake game remake using modern C++ and ncurses to create a dynamic text-based user interface (TUI). Implemented a modular architecture, separating game logic, rendering, and input handling for maintainability and scalability. Employed dynamic polymorphism to allow easy extension of game features without modifying the core architecture. Designed custom game state management and collision detection, ensuring responsive and engaging gameplay.',
            'site' => null,
            'source' => 'https://github.com/devloos/Snake-Game',
            'file' => null,
            'tags' => [
                'C++',
                'Tui',
                'Ncurses',
                'CMake',
            ]
        ]
    ];

    public function __construct(
        private EntityManagerInterface $entityManagerInterface,
        private ProjectRepository $projectRepository,
        private TagRepository $tagRepository,
    ) {
        parent::__construct();
    }

    protected function configure(): void {}

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Starting backfill!');

        foreach (self::PROJECTS as $projectArr) {
            $project = new Project();

            $project->setTitle($projectArr['title']);
            $project->setDescription($projectArr['description']);
            $project->setSite($projectArr['site']);
            $project->setSource($projectArr['source']);
            $project->setFeatured(false);
            $project->setVisible(true);
            $project->setFile($projectArr['file']);
            $project->setPriority(random_int(4, 10000));

            foreach ($projectArr['tags'] as $title) {
                $tag = $this->tagRepository->findOneBy([
                    'title' => $title
                ]);

                if (!($tag instanceof Tag)) {
                    $tag = new Tag();
                    $tag->setTitle($title);
                    $tag->setFeatured(false);

                    $this->entityManagerInterface->persist($tag);
                }

                $project->addTag($tag);
            }

            $this->entityManagerInterface->persist($project);
        }

        $this->entityManagerInterface->flush();

        $output->writeln('Backfill finished!');
        return Command::SUCCESS;
    }
}
