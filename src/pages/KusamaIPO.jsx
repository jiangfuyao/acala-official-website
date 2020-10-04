import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import KusamaIPOContent from "../components/KusamaIPOContent";

function KusamaIPO() {
    return (
        <>
            <Header theme="dark" />
            <KusamaIPOContent />
            <Footer theme="dark" />
        </>
    );
}

export default KusamaIPO;
