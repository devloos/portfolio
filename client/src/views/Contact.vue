<script setup>
import { ref } from 'vue';
import StyledButton from '@/components/styled/StyledButton.vue';
import { smartFetch } from '@/assets/utility/smart-fetch';
import { injectAppContext } from '@/App.vue';

const appContext = injectAppContext();

const form = ref(null);

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

async function sendEmail() {
  appContext.overlay.start();

  const body = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  const response = await smartFetch({
    url: '/api/email/create',
    method: 'POST',
    data: body,
  });

  if (response.success) {
    form.value.reset();
  }

  appContext.overlay.stop();
}
</script>

<template>
  <div class="container mt-10 mb-28 px-2 md:mt-16">
    <div class="mb-12 text-center">
      <p class="mx-auto max-w-xl font-mono text-4xl tracking-wide dark:text-slate-200">
        Let's discuss project ideas or share knowledge with each other.
      </p>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
      <div class="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label class="dark:text-alternate-100 text-sm font-semibold tracking-wide">
            Name
          </label>
          <input
            v-model.trim="name"
            type="text"
            class="text-primary-600 ring-primary-100 focus:ring-primary-400 dark:ring-primary-200 rounded-sm bg-inherit px-2 py-3 shadow-xs ring-1 transition-all focus:ring-2 focus:outline-hidden dark:text-slate-200"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="dark:text-alternate-100 text-sm font-semibold tracking-wide">
            Email
          </label>
          <input
            v-model.trim="email"
            type="email"
            class="text-primary-600 ring-primary-100 focus:ring-primary-400 dark:ring-primary-200 rounded-sm bg-inherit px-2 py-3 shadow-xs ring-1 transition-all focus:ring-2 focus:outline-hidden dark:text-slate-200"
            required
          />
        </div>

        <div class="flex flex-col gap-2 sm:col-span-2">
          <label class="dark:text-alternate-100 text-sm font-semibold tracking-wide">
            Subject
          </label>
          <input
            v-model.trim="subject"
            type="text"
            class="text-primary-600 ring-primary-100 focus:ring-primary-400 dark:ring-primary-200 rounded-sm bg-inherit px-2 py-3 shadow-xs ring-1 transition-all focus:ring-2 focus:outline-hidden dark:text-slate-200"
            required
          />
        </div>

        <div class="flex flex-col gap-2 sm:col-span-2">
          <label class="dark:text-alternate-100 text-sm font-semibold tracking-wide">
            Message
          </label>
          <textarea
            v-model.trim="message"
            rows="8"
            cols="70"
            class="text-primary-600 ring-primary-100 focus:ring-primary-400 dark:ring-primary-200 rounded-sm bg-inherit px-2 py-3 shadow-xs ring-1 transition-all focus:ring-2 focus:outline-hidden dark:text-slate-200"
            required
          />
        </div>
      </div>

      <div class="flex justify-center">
        <StyledButton
          class="ring-primary-400 dark:bg-primary-600 mx-auto bg-slate-300 px-14! tracking-wide ring-1 dark:ring-slate-400"
        >
          Send Email
        </StyledButton>
      </div>
    </form>
  </div>
</template>
