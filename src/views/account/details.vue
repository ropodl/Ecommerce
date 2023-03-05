<script setup></script>
<template>
  <v-row>
    <v-col cols="12">
      <v-card border flat class="mb-3">
        <v-card-title>General Information</v-card-title>
        <v-card-text>
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
        </v-card-text>
        <v-card-actions>
          <v-btn width="200" height="50" class="text-capitalize">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card-title>Danger Zone</v-card-title>
      <v-card border flat>
        <v-list class="py-0">
          <v-list-item class="py-4">
            <v-list-item-title>Change Password</v-list-item-title>
            <v-list-item-subtitle>
              Changing Password uses sudo powers.
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn border color="error" variant="text" class="text-capitalize">
                Change Password
              </v-btn>
            </template>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="py-4">
            <v-list-item-title>Delete Account</v-list-item-title>
            <v-list-item-subtitle>
              Once you delete your account, there is no going back. Please be
              certain.
            </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn border color="error" variant="text" class="text-capitalize">
                Delete Account
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
