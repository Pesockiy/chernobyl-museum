import Main from "./pages/Main";
import Quiz from "./components/Quiz";

import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Museum from "./pages/Museum";

import {
    MAIN_ROUTE,
    BUY_TICKETS_ROUTE,
    EVENTS_ROUTE,
    NEWS_ROUTE,
    NEWS_ITEM_ROUTE,
    VIRTUAL_TOUR_ROUTE,
    MUSEUM_PROJECTS_ROUTE,
    QUIZ_ROUTE,
    MUSEUM_ROUTE,
    ABOUT_MUSEUM_ROUTE,
    FONDS_MUSEUM_ROUTE,
    MEMORY_BOOK_ROUTE,
    RESEARCHERS_ROUTE,
    MUSEUM_MAP_ROUTE,
    MUSEUM_HELPS_ROUTE,
    CONTACTS_ROUTE

} from "./utils/consts";

export const pageRoutes = [
    { path: MAIN_ROUTE, element: <Main /> },
    { path: QUIZ_ROUTE, element: <Quiz /> },
    { path: NEWS_ROUTE, element: <News /> },
    { path: NEWS_ITEM_ROUTE, element: <NewsArticle /> },
    { path: MUSEUM_ROUTE, element: <Museum /> },
]