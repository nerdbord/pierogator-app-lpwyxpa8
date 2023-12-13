import axios, { AxiosInstance } from 'axios';

const OPEN_AI_KEY =
  '9daaaf77407c4b0eb7e773ccd89b0ae8b40831cd727ab6fcf3d508ed9b787c76';

const DUMPINGS_API_KEY =
  'd22137246c107849b3c75c343ab333b9528b9631b53d9416616c46661509e69f';

const openaiAPI: AxiosInstance = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1/openai',
  headers: {
    'Content-Type': 'application/json',
    Authorization: OPEN_AI_KEY,
  },
  timeout: 60000,
});

const dumplingsAPI: AxiosInstance = axios.create({
  baseURL: 'https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes',
  headers: {
    'Content-Type': 'application/json',
    Authorization: DUMPINGS_API_KEY,
  },
  timeout: 60000,
});

type ImageResponse = { data: [{ url: string }] };

async function generateImage(prompt: string) {
  try {
    const response = await openaiAPI.post('/images/generations', {
      prompt,
      n: 1,
      size: '342x233',
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

async function generateChatCompletion(content: string) {
  try {
    const response = await openaiAPI.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant. Answer in polish. Return only stringify JSON.'
        },
        {
          role: 'user',
          content,
        },
      ],
    });
    return response.data as ChatCompletionResponse;
  } catch (error) {
    console.log('error', error);
  }
}

interface CreateDumplingRecipeResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recipe?: Record<string, any>;
}

export interface DumplingRecipe {
  name: string;
  imageSrc: string;
  ingredients: {
    dough: { name: string; quantity: string }[];
    filling: { name: string; quantity: string }[];
  };
  instructions: {
    dough_preparation: string[];
    filling_preparation: string[];
    forming_and_cooking_dumplings: string[];
    serving: string[];
  };
}

async function createDumplingRecipe(recipe: DumplingRecipe) {
  try {
    const response = await dumplingsAPI.post('', recipe);

    return response.data as CreateDumplingRecipeResponse;
  } catch (error) {
    console.log('error', error);
  }
}

type AllDumplingRecepisResponse = unknown;

async function listAllDumplingRecipes() {
  try {
    const response = await dumplingsAPI.get('');
    return response.data as AllDumplingRecepisResponse;
  } catch (error) {
    console.log(error);
  }
}

type MyDumplingRecipesResponse = unknown;

async function findMyDumplingRecipes() {
  try {
    const response = await dumplingsAPI.get('/me');
    return response.data as MyDumplingRecipesResponse;
  } catch (error) {
    console.log(error);
  }
}

async function findDumplingRecipeById(id: string) {
  try {
    const response = await dumplingsAPI.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteDumplingRecipeById(id: string) {
  try {
    const response = await dumplingsAPI.delete(`/${id}`);
    return response?.data?.deletedRecipe;
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
