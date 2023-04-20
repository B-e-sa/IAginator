import axios from 'axios';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

interface IGeneratedImages {
  created: number;
  data: [{ url: string }] | [];
}

interface IState {
  input: string;
  keywords: string[];
  activeOption: string;
  quantity: number;
  size: string;
  generatedImages: IGeneratedImages;
  generationStatus: string;
}

export const useKeywordsStore = defineStore('keywords', {
  state: (): IState => ({
    keywords: [],
    activeOption: "",
    input: "",
    quantity: 1,
    size: "256x256",
    generatedImages: { created: 0, data: [] },
    generationStatus: "none"
  }),
  getters: {
    getGeneratioNStatus(): string {
      return this.generationStatus;
    },
    getImages(): IGeneratedImages {
      return this.generatedImages;
    },
    getSize(): string {
      return this.size;
    },
    getQuantity(): number {
      return this.quantity;
    },
    getKeywords(): string[] {
      return this.keywords;
    },
    getActiveOptions(): string {
      return this.activeOption;
    }
  },
  actions: {
    changeSize(size: string) {

      this.$state.size = size;
    },
    removeQuantity() {

      if (this.$state.quantity === 1) return;

      this.$state.quantity--;
    },
    addQuantity() {

      if (this.$state, this.quantity === 5) return;

      this.$state.quantity++;
    },
    saveInput(input: string) {

      this.$state.input = input;
    },
    addKeyword(keyword: string) {

      const keywordAlreadyAdded =
        !!this.$state.keywords.find(arrayKeyword => arrayKeyword === keyword);

      if (!keywordAlreadyAdded) {
        this.$state.keywords.push(keyword);

        return;
      }

      this.$state.keywords =
        this.$state.keywords.filter(arrayKeyword => arrayKeyword !== keyword);
    },
    removeKeyword(keyword: string) {

      this.$state.keywords =
        this.$state.keywords.filter(arrayKeyword => arrayKeyword !== keyword);
    },
    changeActiveOption(option: string | undefined) {

      if (option) {
        if (option === this.$state.activeOption)
          return this.$state.activeOption = "";

        this.$state.activeOption = option;
      }
    },
    generateImages() {

      const { input, keywords, quantity, size } = this.$state;

      if (input.trim().length === 0)
        return toast("Please, type your idea", { type: 'warning' });

      this.$state.generationStatus = "loading";

      // ex: Soft Lightning, Realistic Shadow
      const spacedKeywords = keywords.join(', ');

      // ex: USER INPUT, Soft lightning, Realistic Shadow
      const fullInput = input + ', ' + spacedKeywords;

      axios.post('https://api.openai.com/v1/images/generations', {
        prompt: fullInput,
        n: quantity,
        size: size
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.VUE_APP_API_KEY}`
        }
      })
        .then(response => {
          this.$state.generatedImages.data = response.data.data;
          this.$state.generationStatus = "none";
        })
        .catch((e) => {
          this.$state.generationStatus = "none";
          const errorMessage = e.response.data.error.message;
          toast("Something went wrong!\nSee the error in the console or click HERE", {
            type: 'error',
            onClick: () => toast(errorMessage, { type: 'error', })
          });
        });
    }
  },
})
