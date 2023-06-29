<template>
  <v-dialog v-model="$store.state.showDialogMessage" max-width="500">
    <v-card>
      <v-card-title class="headline" v-html="$store.state.dialogMessageTitle"></v-card-title>
      <v-card-text class="subtitle-1" v-html="$store.state.dialogMessageText"></v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="$store.state.showDialogMessage = false" color="primary darken-1" text>
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>