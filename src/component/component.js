import React from 'react';
import HomePage from './HomePage/homePage';
import PageNotFound from './NotFound/PageNotFound';
import Header from './Header/header';
import Footer from './Footer/footer';

/**
 * Routing Component
 */

const HomePageComponent = () => {
    return <HomePage />
}

const PageNotFoundComponent = () => {
    return <PageNotFound />
}

/**
 * Non Routing Component
 */

const HeaderComponent = () => {
    return <Header />
}

const FooterComponent = () => {
    return <Footer />
}

export {
    HomePageComponent, PageNotFoundComponent, HeaderComponent,
    FooterComponent
}