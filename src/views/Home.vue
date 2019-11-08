<template>
  <div>
    <v-btn large class="d-block mx-auto mt-10" color="primary">Bliv frivillig</v-btn>
    <v-card width="800" class="mx-auto mt-10">
      <v-card-title>
        <h1 class="mx-auto">Ofte Stillede Spørgsmål</h1>
      </v-card-title>
      <v-card-text>
        <v-expansion-panels multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>Hvad er en vagtplan?</v-expansion-panel-header>
            <v-expansion-panel-content>Alle de tidspunkter du er tilstede! (Men husk at tage en pause!)</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Hvad er en briefing?</v-expansion-panel-header>
            <v-expansion-panel-content>Det er når daniel råber.</v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Er der mad?</v-expansion-panel-header>
            <v-expansion-panel-content>
                Ja!
              <v-expansion-panel>
                <v-expansion-panel-header>Også hvis jeg er (veganer|allergiker)?</v-expansion-panel-header>
                <v-expansion-panel-content>Ja!</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Puuh det lyder hårdt. Må jeg også godt slappe af?</v-expansion-panel-header>
            <v-expansion-panel-content>Ja!</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
