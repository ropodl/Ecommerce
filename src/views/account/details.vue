<script setup></script>
<template>
  <v-card border flat class="mb-3">
    <v-card-title>General Information</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="pb-0">
          <v-text-field placeholder="First Name"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="pb-0">
          <v-text-field placeholder="Last Name"></v-text-field>
        </v-col>
        <v-col cols="12" md="12" class="py-0">
          <v-text-field
            placeholder="Display Name"
            messages=" This will be how your name will be displayed in the account section and in reviews "
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12" class="py-0">
          <v-text-field placeholder="Email Address"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card border flat class="mb-3">
    <v-card-title>Change Password</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="pb-0">
          <v-text-field placeholder="Current Password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field placeholder="New Password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="py-0">
          <v-text-field placeholder="Confirm Password"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-btn height="50" class="text-capitalize px-8" rounded="small"
    >Save Changes</v-btn
  >
</template>
