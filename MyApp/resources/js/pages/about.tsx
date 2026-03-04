import { Head, Link } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { usePage } from '@inertiajs/react';

export default function About({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="About">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        <Link
                            href="/"
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            About
                        </Link>
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-4xl">
                        <div className="rounded-lg bg-white p-6 pb-12 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">

                            {/* Layout: foto kiri + konten kanan */}
                            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">

                                {/* Foto Mahasiswa - Lingkaran */}
                                <div className="flex-shrink-0">
                                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#e8e8e3] shadow-md dark:border-[#2e2e2b] lg:h-52 lg:w-52">
                                        <img
                                            src="/assets/images/me.jpeg"
                                            alt="Foto Mahasiswa"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                </div>

                                {/* Konten Portofolio */}
                                <div className="flex-1 text-center lg:text-left">
                                    {/* Nama & Jurusan */}
                                    <h1 className="mb-1 text-2xl font-semibold">
                                        Bagus Insan Pradana
                                    </h1>
                                    <p className="mb-1 text-sm font-medium text-[#706f6c] dark:text-[#A1A09A]">
                                        D3 Teknik Informatika · Politeknik Elektronika Negeri Surabaya
                                    </p>
                                    <p className="mb-4 text-xs text-[#a09f9b] dark:text-[#706f6c]">
                                        NRP: 3124521007 · Angkatan 2024
                                    </p>

                                    {/* Deskripsi Singkat */}
                                    <p className="mb-5 text-sm leading-relaxed text-[#706f6c] dark:text-[#A1A09A]">
                                        I'm an Informatics Engineering student at <span className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">Politeknik Elektronika Negeri Surabaya (PENS)</span> with a strong focus on building web-based systems that are structured, maintainable, and production-ready. <span className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">I also have a passion in technology</span>, and also <span className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">have a strong interest in audio stuff, such as IEM, headphones, and speakers.</span> I have a strong desire to learn and grow in the field of web development, and I'm always looking for new opportunities to expand my knowledge and skills.
                                    </p>


                                    {/* Kontak & Sosial */}
                                    <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                                        <a
                                            href="mailto:dana.bagus07@gmail.com"
                                            className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 text-xs leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Email
                                        </a>
                                        <a
                                            href="https://github.com/RockHead07"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 text-xs leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/bagus-insan-pradana-69513434a/?skipRedirect=true"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 text-xs leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://byte-portfolio.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 text-xs leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            My Portfolio Website
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}