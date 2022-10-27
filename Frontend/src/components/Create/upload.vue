<template>
  <div class="">
    <div class="gallery width-100" :class="error ? 'red-border' : ''">
      <Loader
        color="#0275d8"
        :active="loading"
        spinner="line-scale"
        background-color="rgba(255, 255, 255, .4)"
      />
      <div class="elements-wraper">
        <!--UPLOAD BUTTON-->
        <div class="button-container image-margin">
          <label for="images-upload" class="images-upload">
            <svg
              class="custum-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </label>
          <input
            @change="fileChange"
            id="images-upload"
            type="file"
            accept="image/*"
            multiple
            hidden
          />
        </div>

        <!--IMAGES PREVIEW-->
        <div
          v-for="(image, index) in media"
          :key="index"
          class="image-container image-margin"
        >
          <img :src="image.url" alt="" class="images-preview" />
          <button @click="remove(index)" class="close-btn" type="button">
            <svg
              class="times-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="0.8em"
              height="0.8em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 352 512"
            >
              <path
                d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="error" id="media-required">
      <p class="red-text">{{ error }}</p>
    </div>
    <div v-for="(image, index) in media" :key="index" class="m-top">
      <input type="text" name="media[]" :value="image.name" hidden />
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "uploadVue",
  data() {
    return {
      media: [],
      loading: false,
    };
  },
  methods: {
    async fileChange(event) {
      this.loading = true;
      let files = event.target.files;
      for (var i = 0; i < files.length; i++) {
        let formData = new FormData();
        let url = URL.createObjectURL(files[i]);
        formData.set("image", files[i]);
        const { data } = await axios.post(this.server, formData);

        this.media.push({
          url: url,
          name: data.name,
          size: files[i].size,
          type: files[i].type,
        });
      }
      this.loading = false;
      this.media_emit();
    },
    remove(index) {
      this.media.splice(index, 1);
      this.media_emit();
    },
    media_emit() {
      this.$emit("media", this.media);
    },
  },
  mounted() {
    this.$emit("media", this.media);
  },
  props: {
    error: "",
    server: {
      type: String,
      default: "/api/upload",
    },
  },
};
</script>
