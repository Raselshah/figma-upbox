import React from "react";

const Works = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-12">How it works?</h2>
      <div className="w-4/6 mx-auto">
        <div className="first">
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="https://s3-alpha-sig.figma.com/img/6dd8/577a/82ef920c2721e1818e1d4286e9c6c6b8?Expires=1661731200&Signature=PNt6eaWSmxKWaXPskrkP1Ky5Otg7R~e5SAttjF6MPuMcAmqwk6Vb-m8JBZlbTWdyGc4HSTwumb2HcDKymrECzBxJhF5EZRbhxv9E~0Zsy8d7Mr4D385mXy8u3idai8Xd9p9JXog3DtZ38SYf6~sALllXbKd895U-MBjjWp-lLfobNkoksphK630y086eIPLF1vWCsne-fflVUx9UnWzMrtzyxUiawparb-d21xe-flHPaiECUVYRNE92~pwB2KlRbWeKfxKIkOsb0Z3vemZsSyvfctyo2DxWdjS9KwTbBf3YV~FJ7bagbtGXIbnSJDlQogH7mv8-av5SljppqVZEQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                class="w-52 rounded-full img-fluid"
                alt=""
              />
              <div>
                <h1 class="text-5xl font-bold">
                  Setup your profile & <br />
                  preferences
                </h1>
                <p class="py-6">
                  Once you create an account, you can start to tell us your
                  likes and dislikes so we can tailor the experience just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="flex flex-col justify-end items-end">
            <img
              className="img-fluid w-72"
              src="https://www.pngkey.com/png/full/775-7758922_box-gift-birthday-courtesy-vector-open-christmas-clipart.png"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-4xl font-bold m-2">
                Review your <br />
                custom box
              </h2>
              <p className="text-left">
                Once we get to know you, we will show you the box <br /> we’ve
                crafted. This is your chance to <br /> approve it before we ship
                it to your house.
              </p>
            </div>
          </div>
        </div>
        <div className="three">
          <div class="hero min-h-screen w-full md:w-4/6 mx-auto">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="https://s3-alpha-sig.figma.com/img/c799/30da/c8cb85b0baafa8015f9031650049feb7?Expires=1661731200&Signature=cN4xSDnhtimjiqaBWKyQjEGxXZuL6YSj1k19Azizc~jsPStK2hr6VaQbhuY1nGIgOAhisNXi7M75xDQFthsIsPq-LifFiPeSR9t9LtBO~BclVEeBhxVzzfqoJupL21B6QxVmQrtWoT3XUISBGepj8GUARe41CHWjLsqZYosMa6XDT9FJOeQa1CbAVfIZafTauq~M7Phx-Km1y9yn0MKuGUAgxRoDo6ubzwHwu7WIjRApDxtamGSYei--BBQQMvWydRURNNuDY9GNUAagDoy9H7xjfC3qQJ0Pb8ff787OnXFu1UQkL6DMVUivDvwqzSwzUKWTqr4ry24cEwkLgYakdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                class="img-fluid w-52 rounded-full"
                alt=""
              />
              <div>
                <h1 class="text-5xl font-bold">Try it on at home</h1>
                <p class="py-6">
                  Your box will arrive within 3-5 days (usually sooner) and you
                  get the joy to unbox your Upbox. Try it all on and send back
                  whatever you’re not in love with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-72 btn-outline flex justify-center mx-auto mt-6 btn border-primary rounded-full hover:bg-primary hover:border-0 mb-6">
        TRY IT FOR YOURSELF
      </button>
    </div>
  );
};

export default Works;
