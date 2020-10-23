import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import KusamaPLOContent from "../components/KusamaPLOContent";

function KusamaPLO() {
    return (
        <>
            <Header theme="dark" />
            <KusamaPLOContent />
            <Footer theme="dark" />
        </>
    );
}

export default KusamaPLO;
