import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import Banner from "@/components/ui/Banner/Banner";
import StarImg from "@/components/shared/StarImg/StarImg";
import ShowAllQa from "@/components/ui/ShowAllQa/ShowAllQa";

export default function Home() {
  return (
    <main>
      <div className="px-10 py-5">
        {/* Header[Navbar] Starts */}
        <Navbar />
        {/* Header[Navbar] Ends */}
        {/* Banner Image Section Starts */}
        <Banner />
        {/* Banner Image Section Ends */}
        <div className="p-10 lg:p-20">
          {/* Title and Searchbar Starts */}
          <section>
            <div
              className="text-left flex items-center justify-start gap-2
          "
            >
              <span className="text-3xl pb-8 font-bold">
                Web Development Interview Questions And Answers
              </span>
              <StarImg />
            </div>
            <div className="text-left pb-5">
              <span className="text-xl pb-8">Choose a Category:</span>
              <span></span>
            </div>

            <hr />
          </section>
          {/* Title and Searchbar Ends */}
          {/* QA Part Starts */}
          <section className="h-screen overflow-auto">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 mx-auto">
              QA is coming..
              <ShowAllQa />
            </div>
          </section>
          {/* QA Part Ends */}
        </div>
      </div>
      {/* Footer Starts */}
      <Footer />
      {/* Footer Ends */}
    </main>
  );
}
