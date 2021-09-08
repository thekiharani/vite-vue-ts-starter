<script lang="ts">
import { defineComponent } from "vue";
import JobList from "./components/JobList.vue";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
  },
  methods: {},
});
</script>

<template>
  <div class="font-montserrat">
    <div class="h-screen w-full bg-gray-200">
      <JobList />
    </div>
  </div>
</template>
