import React, { Suspense, useContext, useEffect, useState } from "react";
import classes from "./App.module.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from "@mui/system";
import theme from "./theme/theme";
// import { TestImage } from './pages/test/test';
import AppCtx, { AppCtxUpdater, saveContext } from "./store/app-state-context";
import GeneralController from "./controllers/general.controller";
import { TestImage } from "./pages/test/test";
import { LoadingButton } from "@mui/lab";
import TextTranslationPage from "./pages/text-translation/textTranslationPage";
import { UserFromBackend } from "./types/common/axios.types";

const GetSignUpDetails = React.lazy(
  () => import("./pages/sign-up/get-sign-up-details/GetSignUpDetailsPage")
);
const WelcomePage = React.lazy(() => import("./pages/welcome/WelcomePage"));
const PreviewImage = React.lazy(
  () => import("./pages/viewimage/ViewImagePage")
);
const SignInPage = React.lazy(() => import("./pages/signin/SignInPage"));
const ConfirmEmail = React.lazy(() => import("./pages/sign-up/confirm-email"));
const CreateProfile = React.lazy(
  () => import("./pages/sign-up/create-profile/SignUpCreateProfile")
);
const Dashboard = React.lazy(() => import("./pages/dashboard/DashboardPage"));
const SelectLanguagesPage = React.lazy(
  () => import("./pages/select-languages/SelectLanguagesPage")
);
const ViewTranslations = React.lazy(
  () => import("./pages/viewtranslations/viewtranslations")
);
const CreatePost = React.lazy(() => import("./pages/createPost"));
const PreviewPost = React.lazy(() => import("./pages/previewPost"));
const ProfilePage = React.lazy(() => import("./pages/profilePage"));
const GameScreen = React.lazy(() => import("./pages/gameScreen"));
const PracticeScreen = React.lazy(() => import("./pages/practiceScreen"));
const QuizScreen = React.lazy(() => import("./pages/quizScreen"));

function App() {
  const ctx = useContext(AppCtx);
  const ctxUpdater = useContext(AppCtxUpdater);
  const [areLanguagesReady, setAreLanguagesReady] = useState<boolean>(false);
  /**
   * Use useEffect to load available languages
   */
  useEffect(() => {
    GeneralController.getAllLanguages(ctx.nativeLanguage)
      .then(async function (avlLangs) {
        if (ctx.translations[ctx.nativeLanguage] === undefined) {
          const promise = Promise.all(
            Object.entries(ctx.translations["en"]).map(
              async function ([key, engText]) {
                const tr = await GeneralController.getTranslation(
                  engText,
                  ctx.nativeLanguage,
                  "en"
                );
                return { key, translation: tr.translatedText };
              } // async function([key, engText]) ends
            ) // .map ends
          ); // Promise.all ends
          return promise;
        } // if ends
      }) // .then(function(avlLangs)) ends
      .then((translations) => {
        if (translations === undefined) return;
        // @ts-ignore: ignore next line because we're soon giving them values
        ctx.translations[ctx.nativeLanguage] = {};
        translations.forEach(({ key, translation }) => {
          ctx.translations[ctx.nativeLanguage][key] = translation;
        });
      }) // .then(translations) ends
      .then(async function () {
        const auth_token = localStorage.getItem("auth-token");
        if (!auth_token) return;
        try {
          return GeneralController.getUserProfile();
        } catch (e) {
          return e;
        }
      }) // .then(function()) ends
      .then(async function (user) {
        const typeGuard = (x: any): x is UserFromBackend => {
          return x && "username" in x;
        };
        if (typeGuard(user)) {
          ctx.isLoggedIn = true;
          ctx.username = user.username;
          ctx.email = user.email;
          ctx.firstName = user.firstname;
          ctx.lastName = user.lastname;
          ctx.favouriteLanguages = new Set(
            user.favourite_languages.map(({ code }) => code)
          );
        } else {
          localStorage.removeItem("auth-token");
          ctx.isLoggedIn = false;
          ctx.username = "username";
          ctx.email = "mail@mail.com";
          ctx.firstName = "Hey";
          ctx.lastName = "User!";
          ctx.favouriteLanguages = new Set(["ja"]);
        }
      }) /// .then(async function(value)) ends
      .finally(() => {
        setAreLanguagesReady(true);
        ctxUpdater(function () {
          return { ...ctx };
        });
      }); // .finally ends
    // GeneralController.getAllLanguages(ctx.nativeLanguage).then((data) => {
    //   ctx.availableLanguages = data;

    //   if (ctx.translations[ctx.nativeLanguage] === undefined) {
    //     return Promise.all(
    //       Object.entries(ctx.translations["en"]).map(async ([key, engText]) => {
    //         const tr = await GeneralController.getTranslation(
    //           engText,
    //           ctx.nativeLanguage,
    //           "en"
    //         );
    //         return { key, translation: tr.translatedText };
    //       })
    //     )
    //       .then((values) => {
    //         // @ts-ignore: ignore next line because we're soon giving them values
    //         ctx.translations[ctx.nativeLanguage] = {};
    //         values.forEach(({ key, translation }) => {
    //           ctx.translations[ctx.nativeLanguage][key] = translation;
    //         });
    //       })
    //       .then(() => {
    //         return GeneralController.getUserProfile()
    //           .then((user) => {
    //             ctx.isLoggedIn = true;
    //             ctx.username = user.username;
    //             ctx.email = user.email;
    //             ctx.firstName = user.firstname;
    //             ctx.lastName = user.lastname;
    //             ctx.favouriteLanguages = new Set(
    //               user.favourite_languages.map(({ code }) => code)
    //             );
    //           })
    //           .catch(() => {
    //             localStorage.removeItem("auth-token");
    //             ctx.isLoggedIn = false;
    //             ctx.username = "username";
    //             ctx.email = "mail@mail.com";
    //             ctx.firstName = "Hey";
    //             ctx.lastName = "User!";
    //             ctx.favouriteLanguages = new Set(["ja"]);
    //           });
    //       })
    //       .finally(() => {
    //         ctxUpdater({ ...ctx });
    //       });
    //   }

    //   setAreLanguagesReady(true);
    //   ctxUpdater({ ...ctx });
    // });
  }, [ctx.nativeLanguage]);

  useEffect(() => saveContext(ctx));

  return (
    <>
      <div className={classes.App}>
        {areLanguagesReady && (
          <header className={classes.AppHeader}>
            <ThemeProvider theme={theme}>
              <Suspense
                fallback={
                  <LoadingButton
                    loading
                    sx={{ width: "100%", alignSelf: "center" }}
                  />
                }
              >
                <Router>
                  <Routes>
                    <Route path="/dashboard">
                      <Route index element={<Dashboard />} />
                      <Route path=":userID" element={<Dashboard />} />
                    </Route>
                    {<Route path="/test" element={<TestImage />} />}
                    <Route
                      path="/"
                      element={
                        ctx.isLoggedIn ? (
                          <Navigate replace to={`/dashboard/${ctx.username}`} />
                        ) : (
                          <WelcomePage />
                        )
                      }
                    />
                    <Route path="/view-image" element={<PreviewImage />} />
                    <Route
                      path="/text-translation"
                      element={<TextTranslationPage />}
                    />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route
                      path="/select-favourite-languages"
                      element={<SelectLanguagesPage />}
                    />
                    <Route path="/sign-up">
                      <Route index element={<GetSignUpDetails />} />
                      <Route path="confirm-email" element={<ConfirmEmail />} />
                      <Route
                        path="create-profile"
                        element={<CreateProfile />}
                      />
                    </Route>
                    <Route
                      path="/viewtranslations/:translationID"
                      element={<ViewTranslations />}
                    />
                    <Route
                      path="/createpost/:translationID"
                      element={<CreatePost />}
                    />
                    <Route
                      path="/previewpost/:translationID"
                      element={<PreviewPost />}
                    />
                    <Route
                      path="/profilepage/:userID"
                      element={<ProfilePage />}
                    />
                    <Route path="/game/:userID" element={<GameScreen />} />
                    <Route
                      path="/practice/:userID"
                      element={<PracticeScreen />}
                    />
                    <Route path="/quiz/:userID" element={<QuizScreen />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </Router>
              </Suspense>
            </ThemeProvider>
          </header>
        )}
      </div>
    </>
  );
}

export default App;
