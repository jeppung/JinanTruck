import Image from "next/image";
import Link from "next/link";
import Showcase from "../components/Showcase";
import ServiceItem from "../components/ServiceItem";
import WhyUsItem from "../components/WhyUsItem";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src={"/banner.jpg"}
          layout="responsive"
          width={0}
          height={0}
          priority
          alt="banner"
        />
      </section>
      <section className="bg-[#333333] px-5 text-white">
        <div className="container mx-auto flex flex-col justify-between gap-5 py-[20px] lg:flex-row">
          <div className="flex flex-col items-center gap-0 lg:items-start">
            <h2 className="text-2xl">Welcome to our website</h2>
            <p className="font-light">jinan-truck-demo.vercel.app</p>
          </div>
          <div className="flex overflow-clip rounded-lg">
            <div className="flex h-full w-full items-center justify-center bg-[#999999] py-5 text-center lg:w-96">
              <p className="text-sm font-light">
                PT. Jinan Truck Power Indonesia
              </p>
            </div>
            <div className="flex w-60 items-center justify-center bg-black">
              <Link
                href="https://api.whatsapp.com/send?phone=6287880215500"
                className="cursor-pointer font-light"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto flex flex-wrap justify-center gap-5 px-5 py-20 lg:px-0">
          <Showcase
            desc="sinotruk-howo"
            imageSrc="/1-sinotruk-1.png"
            titleSrc="/sinotruk-logo.png"
          />
          <Showcase
            desc="sitrak-howo"
            imageSrc="/2-sitrak.png"
            titleSrc="/sitrak-logo.png"
          />
          <Showcase
            desc="weichai"
            imageSrc="/weichai-engine.png"
            titleSrc="/weichai-logo.png"
          />
          <Showcase
            desc="sany"
            imageSrc="/4-sany.png"
            titleSrc="/sany-logo.png"
          />
        </div>
      </section>
      <section className="bg-[#666666] py-20" id="aboutus">
        <div className="container mx-auto flex flex-col items-center gap-20 p-5 xl:flex-row">
          <div>
            <Image
              src={"/about-us.png"}
              width={600}
              height={0}
              className=""
              alt="about-us"
            />
          </div>
          <div className="flex-1 text-white">
            <div>
              <h1 className="text-2xl font-bold text-black">
                PT. Jinan Truck Power Indonesia
              </h1>
              <h2>Produsen truk tugas berat professional</h2>
            </div>
            <div className="mt-5 flex flex-col gap-5 font-light">
              <p>
                Kami adalah perusahaan terkemuka yang menyediakan layanan
                profesional dalam bidang Spareparts Contract Support, Unit
                Purchase, dan VHS Spareparts Contract. Berdedikasi untuk
                melayani pelanggan di wilayah Jabodetabek, kami bangga menjadi
                mitra terpercaya bagi industri otomotif dan konstruksi. Dengan
                produk berkualitas tinggi dari merek-merek terkenal seperti{" "}
                <span className="font-bold">SINOTRUK &#40;HOWO&#41;</span> ,{" "}
                <span className="font-bold">SITRAK &#40;HOWO&#41;</span>,{" "}
                <span className="font-bold">WEICHAI</span>, dan{" "}
                <span className="font-bold">SANY</span>, kami siap memenuhi
                segala kebutuhan Anda.
              </p>
              <p>
                Dengan PT. Jinan Truck Power Indonesia, Anda mendapatkan lebih
                dari sekedar produk; Anda mendapatkan mitra yang berkomitmen
                untuk mendukung keberhasilan operasional Anda. Hubungi kami
                sekarang dan rasakan pelayanan profesional dan produk
                berkualitas tinggi yang kami tawarkan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="bg-black pb-10 pt-56">
          <h2 className="text-center text-4xl font-bold text-white">Layanan</h2>
        </div>
        <div className="bg-[#DDDDDD] px-5 py-20 xl:px-0">
          <div className="container mx-auto flex flex-col gap-20">
            <ServiceItem
              id={1}
              title="Spareparts Contract Support"
              description="PT. Jinan Truck Power Indonesia menyediakan layanan dukungan kontrak
            suku cadang yang memastikan ketersediaan suku cadang yang Anda
            butuhkan tepat waktu dan dalam kondisi terbaik. Kami memiliki
            berbagai jenis suku cadang asli untuk berbagai model kendaraan dari
            merek-merek terkenal."
              imageSrc="/layanan1.jpg"
            />
            <ServiceItem
              id={2}
              title="Unit Purchase"
              description="Dengan jaringan pemasok yang luas dan pengalaman
                    bertahun-tahun, kami memastikan Anda mendapatkan unit
                    kendaraan yang sesuai dengan kebutuhan dan anggaran Anda.
                    Produk kami meliputi truk, alat berat, dan kendaraan
                    komersial lainnya dari merek-merek terkemuka seperti
                    SINOTRUK (HOWO), SITRAK (HOWO), WEICHAI, dan SANY."
              imageSrc="/layanan2.jpg"
            />
            <ServiceItem
              id={3}
              title="VHS Spareparts Contract"
              description="Layanan kontrak suku cadang VHS kami dirancang untuk
                    memberikan solusi yang fleksibel dan efisien bagi perusahaan
                    yang membutuhkan pengelolaan suku cadang dalam jumlah besar.
                    Dengan layanan ini, Anda dapat memastikan bahwa semua suku
                    cadang yang dibutuhkan tersedia kapan saja diperlukan,
                    sehingga operasional kendaraan dan peralatan Anda tidak
                    terganggu."
              imageSrc="/layanan3.jpg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold">Mengapa Kami ?</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 px-5 lg:grid-cols-2 xl:px-0">
            <WhyUsItem
              title="Kualitas Produk Terjamin"
              description="Kami hanya menyediakan produk berkualitas tinggi dari
                merek-merek terkenal yang telah terbukti handal dan tahan lama.
                Semua suku cadang dan unit kendaraan kami memenuhi standar
                industri tertinggi."
            />
            <WhyUsItem
              title="Layanan yang Prima"
              description="Tim layanan pelanggan kami selalu siap membantu Anda dengan
                pertanyaan atau kebutuhan spesifik Anda. Kami berkomitmen untuk
                memberikan solusi terbaik dan pelayanan yang cepat dan
                responsif."
            />
            <WhyUsItem
              title="Pengalaman dan Keahlian"
              description="PT. Jinan Truck Power Indonesia memiliki pengetahuan dan
                keahlian untuk memberikan solusi yang sesuai dengan kebutuhan
                Anda. Tim teknisi dan ahli kami selalu siap memberikan dukungan
                teknis dan konsultasi profesional."
            />
            <WhyUsItem
              title="Wilayah Pemasaran Luas"
              description="Kami melayani pelanggan di seluruh Indonesia, memastikan bahwa
                Anda dapat mengakses produk dan layanan kami dengan mudah dan
                cepat."
            />
          </div>
        </div>
      </section>
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <Link href="tel:087880215500" className="cursor-pointer">
          <div className="w-fit rounded-full bg-blue-500 p-2">
            <BsFillTelephoneFill size={30} color="white" />
          </div>
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=6287880215500"
          className="cursor-pointer"
        >
          <div className="w-fit rounded-full bg-green-500 p-2">
            <FaWhatsapp size={30} color="white" />
          </div>
        </Link>
      </div>
    </main>
  );
}
