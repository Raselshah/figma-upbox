import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-secondary">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://s3-alpha-sig.figma.com/img/d6a0/bced/97157fd6e1f9a7c9c65eefb3621664df?Expires=1661731200&Signature=gLrBa5TIOhD393kLgA8W1Z5p8qj-VMb~B5s8XbJKseRLZEKCa5fXr4zeGbGnJTFqaJ5-rws4bKf5x7LozjTSW7k-NbHCeX7O6KjnJsqhYvrbr5RqEhEAk0-4QJBIQrDXknrtSSSc75NvLhN6XgXNmAvKOc0FC2rwqP8GvOFP8QNme8A8dVM9cmP1iAkK5Dem186YmSQJUlRor~RCpRVCyolR8CjJoghnL14ddRESoUR7QVnZ51S~aVCMyLfgPieiEbl9GqA-6MbGVzLiUK-VDSSmly6VN0m8zTv5waptCEMwgkn0tjKS~DTZix6LUnDZ2RCMzLF2k1BEGMvpMkHdfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
          class="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">
            {" "}
            Look good without <br /> leaving your house.
          </h1>
          <p class="py-6">
            Upbox is the easiest way to look your best without having to hunt
            for the perfect makeup combination. Our stylists curate the latest
            trends and send them directly to your door every month.
          </p>
          <button class="btn btn-outline w-52 rounded-full">SIGN UP </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
