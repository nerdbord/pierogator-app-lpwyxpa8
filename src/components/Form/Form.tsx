import { useState } from 'react';
import { useForm } from 'react-hook-form';
export const Form = () => {
  const [formState, setFormState] = useState<number>(0);
  const [pierogImage, setPierogImage] = useState('');
  const { watch, register } = useForm();

  const completeFormStep = () => {
    setFormState((cur) => cur + 1);
  };

  const deletePierogImage = () => setPierogImage('');

  const doughPrompt = watch().dough as string;
  const fillingPrompt = watch().filling as string;
  const ingredientsPrompt = watch().ingredients as string;
  const doughLock = watch().doughLock as boolean;
  const fillingLock = watch().fillingLock as boolean;
  const ingredientsLock = watch().ingredientsLock as boolean;

  return (
    <div>
      <div>
        <h1>
          Welcome to <span>the Club</span>
        </h1>
        <p>Become a new member in 3 easy steps</p>
      </div>
      <div>
        <div>
          <form>
            {formState < 2 && (
              <section>
                <h2>Personal Information</h2>
                <label htmlFor="dough">Ciasto</label>
                <div>
                  <input
                    id="dough"
                    disabled={doughLock}
                    {...register('dough', { onChange: deletePierogImage })}
                    placeholder="wpisz, wygeneruj lub zostaw puste"
                  />
                  <input type="checkbox" {...register('doughLock')} />
                </div>

                <label htmlFor="filling">Nadzienie</label>
                <div>
                  <input
                    id="filling"
                    disabled={fillingLock}
                    {...register('filling', { onChange: deletePierogImage })}
                    placeholder="wpisz, wygeneruj lub zostaw puste"
                  />
                  <input type="checkbox" {...register('fillingLock')} />
                </div>

                <label htmlFor="ingredients">Składniki</label>
                <div>
                  <input
                    id="ingredients"
                    disabled={ingredientsLock}
                    {...register('ingredients', {
                      onChange: deletePierogImage,
                    })}
                    placeholder="wpisz, wygeneruj lub zostaw puste"
                  />
                  <input type="checkbox" {...register('ingredientsLock')} />
                </div>
                {!!pierogImage && (
                  <>
                    <h2>Pieróg</h2>
                    <img src="https://xurxupibc5lblwyy.public.blob.vercel-storage.com/dumpling_Sample%20Dumpling_1702118880093-lJ7z3XJrHu5XlbKsUJoWlhCaQvBsCU" />
                    <label htmlFor="name">Nazwa</label>
                    <input
                      id="name"
                      {...register('pierogName')}
                      placeholder="wpisz, wygeneruj lub zostaw puste"
                    />
                    <button onClick={completeFormStep} type="button">
                      Zapisz i przejdź do tworzenia przepisu
                    </button>
                  </>
                )}
              </section>
            )}

            {formState === 1 && (
              <section>
                <h2>Pieróg</h2>
                <img src="https://xurxupibc5lblwyy.public.blob.vercel-storage.com/dumpling_Sample%20Dumpling_1702118880093-lJ7z3XJrHu5XlbKsUJoWlhCaQvBsCU" />
                <label htmlFor="info">Address</label>
                <input type="text" id="info" />
              </section>
            )}
            {formState === 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Congrats</h2>
              </section>
            )}

            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  );
};
