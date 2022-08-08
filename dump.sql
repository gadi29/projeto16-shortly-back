--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    email character varying(150) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", url, "shortUrl", "visitCount", "createdAt") FROM stdin;
20	11	https://www.tiobe.com/tiobe-index/	8sh4UGbU	4	2022-08-05 18:36:27.050628
19	6	https://www.tiobe.com/tiobe-index/	e7S-PXXJ	1	2022-08-05 18:36:04.957608
23	8	https://www.tiobe.com/tiobe-index/	yk-XNXGP	0	2022-08-05 18:48:43.79012
24	15	https://www.tiobe.com/tiobe-index/	N2SGfjMp	0	2022-08-05 18:49:42.763815
9	5	https://oceanicaquarium.com.br/ingressos/	awv5CNBK	1	2022-08-05 16:16:49.576779
6	4	https://www.geeksforgeeks.org/express-js-res-redirect-function/	a82m02wb	2	2022-08-05 16:15:49.126531
5	4	https://calendar.google.com/calendar/u/0/r	vS5pWhXD	2	2022-08-05 16:15:40.254549
12	14	http://www.geocities.ws/costeira1/neoa/	KQgNsagg	0	2022-08-05 18:26:54.773346
15	16	https://moodle.ufsc.br/my/	chBv_u1l	0	2022-08-05 18:32:45.055188
16	9	https://webmail.ufsc.br/?_task=mail&_mbox=INBOX	x2O_19Ci	4	2022-08-05 18:33:35.953609
17	7	https://www.tiobe.com/tiobe-index/	7VbMv8pm	6	2022-08-05 18:34:50.65674
21	13	https://www.tiobe.com/tiobe-index/	x_HVCD-Q	3	2022-08-05 18:37:32.281834
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
4	Gadiel	gadiel@gmail.com	$2b$10$Z36ErwPSxWuhA4MVd4fuW.eEnowCLLRcpROmgFQXY1vHd0D5Zr3Qe	2022-08-04 15:41:26.86079
5	Jacó	jacó@gmail.com	$2b$10$Y74yvcMv/ICThk3/CU93WeS0Off2HlOSTbOf.W7tIBk8mNflC0JAW	2022-08-04 15:43:43.961024
6	Jaqueline	jaque@gmail.com	$2b$10$9d7UPJNAfpjVGxQqyTijNuOhGs59CCwpQFeHHxPbGim3TV3S.EKo.	2022-08-05 18:13:47.240716
7	Carol	carol@gmail.com	$2b$10$gjxuYCJ8zGW3pj4lbQPiYuWk1huWPqtJkrVIMehS2mATbSBDwl/Si	2022-08-05 18:13:55.941776
8	Paulo	paulo@gmail.com	$2b$10$VxqW3d2IAjkrYDQItpmhL.GUAZT3bAfT/fuF03QtXUvBVnfksx/46	2022-08-05 18:14:03.051928
9	Ricardo	ricardo@gmail.com	$2b$10$PsVFFRlN1aQfEb5/b3YuxuXf9r.OcRx82Jy4VSXbI8Gwpm1XyjjK.	2022-08-05 18:14:10.233354
10	Lucas	lucas@gmail.com	$2b$10$AVt5FxqQrV1qhWuGbGz7le0uGZCeDDbKtEm6tNBih7SYV4GXxStuy	2022-08-05 18:14:16.33277
11	Beatriz	beatriz@gmail.com	$2b$10$fS4qrbUx71rp/SRyuwJ36OH78TP1UwyMfzjEiBcwje0EmteS88GU6	2022-08-05 18:14:23.298353
12	Maria	maria@gmail.com	$2b$10$.KQYH4xwuLLYPD.i4Gg.s.LbQCpbflgxvLXha.Qq9CAIdFOGUGw8C	2022-08-05 18:14:59.563593
13	Suelen	suelen@gmail.com	$2b$10$cdlI44XZAl1jlMmR.LS2l.BdU.E/GXk2oY.wOfw03yKxBkCno8utG	2022-08-05 18:15:07.552553
14	Ingrilore	ingrilore@gmail.com	$2b$10$0V79XyIaHY/gATczgfKR9uJLDElJuDxRnwesvEJlF8jfRIAT/kTsS	2022-08-05 18:15:14.87773
15	Samuel	samuel@gmail.com	$2b$10$mjOd5ARWUOpqOrJAZPe.YuQP2sQSScuN6mdZ8OkMUo6x9wAyW1KuK	2022-08-05 18:15:20.780724
16	Alvaro	alvaro@gmail.com	$2b$10$rkemChtCEnUUTsI9mXoJq.z2Qii32jINeyH6/z7Axtj4IU7uZgiSa	2022-08-05 18:15:26.387114
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 25, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 16, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

