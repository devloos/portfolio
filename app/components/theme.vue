<template>
  <div>
    <div class="mx-auto mt-8 max-w-4xl space-y-6">
      <!-- Card -->
      <div class="bg-card text-card-foreground border-border rounded-lg border p-6">
        <h2 class="mb-2 text-2xl font-bold">Card Component</h2>
        <p class="text-muted-foreground">This is a card with border and muted text.</p>
      </div>

      <!-- Buttons -->
      <div class="flex flex-wrap gap-4">
        <button
          class="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:opacity-90"
        >
          Primary Button
        </button>
        <button
          class="bg-secondary text-secondary-foreground rounded-md px-4 py-2 hover:opacity-90"
        >
          Secondary Button
        </button>
        <button
          class="bg-destructive text-destructive-foreground rounded-md px-4 py-2 hover:opacity-90"
        >
          Destructive Button
        </button>
        <button
          class="bg-accent text-accent-foreground rounded-md px-4 py-2 hover:opacity-90"
        >
          Accent Button
        </button>

        <button
          class="bg-accent text-accent-foreground rounded-md px-4 py-2 hover:opacity-90"
          @click="$colorMode.preference = 'dark'"
        >
          Dark
        </button>
        <button
          class="bg-accent text-accent-foreground rounded-md px-4 py-2 hover:opacity-90"
          @click="$colorMode.preference = 'light'"
        >
          Light
        </button>
      </div>

      <!-- Input -->
      <div>
        <input
          type="text"
          placeholder="Enter text..."
          class="bg-background border-input focus:ring-ring w-full rounded-md border px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <!-- Popover Style Box -->
      <div
        class="bg-popover text-popover-foreground border-border rounded-lg border p-4 shadow-lg"
      >
        <p>This is a popover-styled element with shadow.</p>
      </div>

      <!-- Muted Section -->
      <div class="bg-muted text-muted-foreground rounded-sm p-4">
        <p>Muted background with muted foreground text and sm radius.</p>
      </div>

      <!-- Custom Radius Examples -->
      <div class="grid grid-cols-4 gap-4">
        <div
          class="bg-primary text-primary-foreground rounded-sm p-4 text-center text-sm"
        >
          sm
        </div>
        <div
          class="bg-primary text-primary-foreground rounded-md p-4 text-center text-sm"
        >
          md
        </div>
        <div
          class="bg-primary text-primary-foreground rounded-lg p-4 text-center text-sm"
        >
          lg
        </div>
        <div
          class="bg-primary text-primary-foreground rounded-xl p-4 text-center text-sm"
        >
          xl
        </div>
      </div>
    </div>
  </div>
</template>
