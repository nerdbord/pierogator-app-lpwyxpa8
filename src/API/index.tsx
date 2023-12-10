import { DumplingRecipe } from '@components/Form/GeneratorForm';
import axios, { AxiosInstance } from 'axios';

const TEAM_API_KEY =
  '9daaaf77407c4b0eb7e773ccd89b0ae8b40831cd727ab6fcf3d508ed9b787c76';

// Configuring global headers for all queries
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: TEAM_API_KEY,
  },
});

type ImageResponse = [{ url: string }];

async function generateImage(prompt: string) {
  try {
    const response = await axiosInstance.post('/openai/images/generations', {
      prompt,
      n: 1,
      size: '1024x1024',
    });

    return response.data as ImageResponse;
  } catch (error) {
    console.log('error', error);
  }
}

interface ChatCompletionResponse {
  choices: [
    {
      message: {
        content: string;
      };
    },
  ];
}

async function generateChatCompletion() {
  try {
    const response = await axiosInstance.post('/openai/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content:
            'Generate only a json no other words. response that contain three keys: dough, falling, ingredients.For this keys you need to generate values that correspond to dumplings. Values need to be min 3 max 6 words separated by coma.',
        },
      ],
    });
    return response.data as ChatCompletionResponse;
  } catch (error) {
    console.log('error', error);
  }
}

interface CreateDumplingRecipeResponse {}

async function createDumplingRecipe(recipe: DumplingRecipe) {
  try {
    const response = await axiosInstance.post(
      '/pierogator/dumpling-recipes',
      recipe,
    );

    return response.data as CreateDumplingRecipeResponse;
  } catch (error) {
    console.log('error', error);
  }
}

type AllDumplingRecepisResponse = unknown;

async function listAllDumplingRecipes() {
  try {
    const response = await axiosInstance.get('/pierogator/dumpling-recipes');
    return response.data as AllDumplingRecepisResponse;
  } catch (error) {
    console.log(error);
  }
}

type MyDumplingRecipesResponse = unknown;

async function findMyDumplingRecipes() {
  try {
    const response = await axiosInstance.get('/pierogator/dumpling-recipes/me');
    return response.data as MyDumplingRecipesResponse;
  } catch (error) {
    console.log(error);
  }
}

async function findDumplingRecipeById(id: string) {
  try {
    const response = await axiosInstance.get(
      `/pierogator/dumpling-recipes/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteDumplingRecipeById(id: string) {
  try {
    const response = await axiosInstance.delete(
      `/pierogator/dumpling-recipes/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export {
  generateImage,
  generateChatCompletion,
  createDumplingRecipe,
  listAllDumplingRecipes,
  findMyDumplingRecipes,
  findDumplingRecipeById,
  deleteDumplingRecipeById,
};
