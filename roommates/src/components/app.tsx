import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "../pages";
import Lazy from "../components/lazy";

const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <Lazy></Lazy>
                <SnackbarProvider>
                    <ZMPRouter>
                        <AnimationRoutes>
                            <Route path="/" element={<HomePage></HomePage>}></Route>
                        </AnimationRoutes>
                    </ZMPRouter>
                </SnackbarProvider>
            </App>
        </RecoilRoot>
    );
};
export default MyApp;
