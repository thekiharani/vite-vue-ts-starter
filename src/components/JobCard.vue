<script lang="ts">
import { defineComponent, PropType } from "vue";
import Job from "../types/Job";

export default defineComponent({
  name: "JobCard",
  components: {},
  props: {
    job: {
      required: true,
      type: Object as PropType<Job>,
    },
  },
});
</script>

<template>
  <div class="bg-gray-50 px-10 py-8 rounded-xl mb-4">
    <h2 class="font-sacramento text-4xl font-bold text-gray-700">{{ job.title }}</h2>
    <div class="my-2 flex space-x-4 text-lg">
      <div>
        <span>Location: </span>
        <span class="font-semibold text-green-500">{{ job.location }}</span>
      </div>

      <div>
        <span>Salary: </span>
        <span class="font-semibold text-green-500">KES {{ job.salary }}</span>
      </div>
    </div>
    <hr class="my-4 text-gray-300" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam, eos
      quisquam dignissimos ducimus delectus repellendus suscipit cupiditate
      perspiciatis dolor natus eum soluta tempore quae ea excepturi sint placeat
      ut?
    </p>
  </div>
</template>