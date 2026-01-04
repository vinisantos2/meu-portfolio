"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import CardAnuncio from "../components/CardAnuncio";
import { LISTA_ANUNCIOS } from "../data/ListaAnuncios";

import "swiper/css";
import "swiper/css/pagination";
import ButtonPadrao from "../components/ButtonPadrão";
import { ArrowRight } from "lucide-react";

export default function SecaoServicos() {
  return (
    <section
      id="servicos"
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Planos e Serviços
        </h2>

        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Soluções digitais sob medida para fortalecer sua presença online e
          transformar ideias em produtos reais.
        </p>

        {/* CARROSSEL */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {LISTA_ANUNCIOS.map((anuncio) => (
            <SwiperSlide
              className="flex flex-col h-full min-h-[520px] rounded-2xl bg-zinc-900 border border-zinc-700 p-6"
              key={anuncio.id}
            >
              <CardAnuncio anuncio={anuncio} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTÃO */}

        <div className="text-center mt-10">
          <ButtonPadrao icon={<ArrowRight size={18} />} href="/servicos">
            Ver mais serviços
          </ButtonPadrao>
        </div>
      </div>
    </section>
  );
}
