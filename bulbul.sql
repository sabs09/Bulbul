-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3309
-- Waktu pembuatan: 24 Jun 2024 pada 08.35
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bulbul`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `catatanberatbadan`
--

CREATE TABLE `catatanberatbadan` (
  `id` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `berat` decimal(3,1) NOT NULL,
  `hewan_peliharaan_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `catatanberatbadan`
--

INSERT INTO `catatanberatbadan` (`id`, `tanggal`, `berat`, `hewan_peliharaan_id`) VALUES
(1, '2024-06-22', '4.5', 1),
(2, '2024-06-23', '4.6', 1),
(3, '2024-06-24', '4.7', 1),
(4, '2024-06-25', '4.8', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `filterhewan`
--

CREATE TABLE `filterhewan` (
  `id` int(11) NOT NULL,
  `produk_id` int(11) DEFAULT NULL,
  `hewan` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `filterhewan`
--

INSERT INTO `filterhewan` (`id`, `produk_id`, `hewan`) VALUES
(1, 1, 'Anjing'),
(2, 2, 'Kucing'),
(3, 3, 'Anjing'),
(4, 4, 'Kucing'),
(5, 5, 'Anjing'),
(6, 6, 'Kucing'),
(7, 7, 'Kucing'),
(8, 8, 'Kucing'),
(9, 9, 'Kucing'),
(10, 10, 'Kucing');

-- --------------------------------------------------------

--
-- Struktur dari tabel `harga`
--

CREATE TABLE `harga` (
  `id` int(11) NOT NULL,
  `produk_id` int(11) DEFAULT NULL,
  `rentang_harga` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `harga`
--

INSERT INTO `harga` (`id`, `produk_id`, `rentang_harga`) VALUES
(1, 1, '0 - 50.000'),
(2, 2, '50.000 - 100.000'),
(3, 3, '100.000 - 500.000'),
(4, 4, '> 500.000'),
(5, 5, '0 - 50.000'),
(6, 6, '0 - 50.000'),
(7, 7, '50.000 - 100.000'),
(8, 8, '100.000 - 500.000'),
(9, 9, '> 500.000'),
(10, 10, '0 - 50.000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hewanpeliharaan`
--

CREATE TABLE `hewanpeliharaan` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `umur` varchar(50) DEFAULT NULL,
  `berat` varchar(50) DEFAULT NULL,
  `gambar_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hewanpeliharaan`
--

INSERT INTO `hewanpeliharaan` (`id`, `nama`, `umur`, `berat`, `gambar_url`) VALUES
(1, 'BulBul', '1 tahun', '3 kg', 'url_gambar_1'),
(2, 'BulBul', '1 tahun', '3 kg', 'url_gambar_1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategoriproduk`
--

CREATE TABLE `kategoriproduk` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kategoriproduk`
--

INSERT INTO `kategoriproduk` (`id`, `nama`) VALUES
(1, 'Semua'),
(2, 'Grooming'),
(3, 'Pet Shop'),
(4, 'Pet Hotel'),
(5, 'Pet Clinic'),
(6, 'Aksesoris'),
(7, 'Makanan Kering'),
(8, 'Makanan Basah'),
(9, 'Obat & Vitamin'),
(10, 'Shampo');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengingat`
--

CREATE TABLE `pengingat` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tanggal` datetime NOT NULL,
  `hewan_peliharaan_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pengingat`
--

INSERT INTO `pengingat` (`id`, `nama`, `tanggal`, `hewan_peliharaan_id`) VALUES
(1, 'grooming', '2024-05-08 09:00:00', 1),
(2, 'jalan-jalan', '2024-05-08 09:00:00', 1),
(3, 'vaksinasi', '2024-05-08 09:00:00', 1),
(4, 'makan', '2024-05-08 09:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kategori_id` int(11) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `ulasan_count` int(11) DEFAULT NULL,
  `gambar_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id`, `nama`, `kategori_id`, `alamat`, `rating`, `ulasan_count`, `gambar_url`) VALUES
(1, 'Grooming Jamur', 2, 'Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322', '4.4', 10, 'url_gambar_1'),
(2, 'Vitamin', 5, 'Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322', '4.4', 8, 'url_gambar_2'),
(3, 'K and K Circle', 2, 'Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322', '4.4', 12, 'url_gambar_3'),
(4, 'Big Plane Pet', 4, 'Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322', '4.4', 15, 'url_gambar_4'),
(5, 'Pet Pet Uhuy', 3, 'Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322', '4.4', 20, 'url_gambar_5'),
(6, 'Cat Choice Adult Salmon 800 Gram', 7, NULL, NULL, NULL, 'url_gambar_6'),
(7, 'Olive Care Vitamin Kucing Bulu Gambul', 9, NULL, NULL, NULL, 'url_gambar_7'),
(8, 'Me-O 80 Gram Adult Ocean Fish', 7, NULL, NULL, NULL, 'url_gambar_8'),
(9, 'Cat Choice Adult Salmon 800 Gram', 7, NULL, NULL, NULL, 'url_gambar_9'),
(10, 'Olive Care Vitamin Kucing Bulu Gambul', 9, NULL, NULL, NULL, 'url_gambar_10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profilpengguna`
--

CREATE TABLE `profilpengguna` (
  `id` int(11) NOT NULL,
  `pengguna_id` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `gambar_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `catatanberatbadan`
--
ALTER TABLE `catatanberatbadan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hewan_peliharaan_id` (`hewan_peliharaan_id`);

--
-- Indeks untuk tabel `filterhewan`
--
ALTER TABLE `filterhewan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indeks untuk tabel `harga`
--
ALTER TABLE `harga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indeks untuk tabel `hewanpeliharaan`
--
ALTER TABLE `hewanpeliharaan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kategoriproduk`
--
ALTER TABLE `kategoriproduk`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hewan_peliharaan_id` (`hewan_peliharaan_id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategori_id` (`kategori_id`);

--
-- Indeks untuk tabel `profilpengguna`
--
ALTER TABLE `profilpengguna`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pengguna_id` (`pengguna_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `catatanberatbadan`
--
ALTER TABLE `catatanberatbadan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `filterhewan`
--
ALTER TABLE `filterhewan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `harga`
--
ALTER TABLE `harga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `hewanpeliharaan`
--
ALTER TABLE `hewanpeliharaan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `kategoriproduk`
--
ALTER TABLE `kategoriproduk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `profilpengguna`
--
ALTER TABLE `profilpengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `catatanberatbadan`
--
ALTER TABLE `catatanberatbadan`
  ADD CONSTRAINT `catatanberatbadan_ibfk_1` FOREIGN KEY (`hewan_peliharaan_id`) REFERENCES `hewanpeliharaan` (`id`);

--
-- Ketidakleluasaan untuk tabel `filterhewan`
--
ALTER TABLE `filterhewan`
  ADD CONSTRAINT `filterhewan_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id`);

--
-- Ketidakleluasaan untuk tabel `harga`
--
ALTER TABLE `harga`
  ADD CONSTRAINT `harga_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id`);

--
-- Ketidakleluasaan untuk tabel `pengingat`
--
ALTER TABLE `pengingat`
  ADD CONSTRAINT `pengingat_ibfk_1` FOREIGN KEY (`hewan_peliharaan_id`) REFERENCES `hewanpeliharaan` (`id`);

--
-- Ketidakleluasaan untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategoriproduk` (`id`);

--
-- Ketidakleluasaan untuk tabel `profilpengguna`
--
ALTER TABLE `profilpengguna`
  ADD CONSTRAINT `profilpengguna_ibfk_1` FOREIGN KEY (`pengguna_id`) REFERENCES `pengguna` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
