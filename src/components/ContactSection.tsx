import Link from "next/link";
import Icon from "./Icon";

export default function ContactSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between text-md-left">
          <div className="col-md-6">
            <h2 className="mb-md-0 text-blue">Contact</h2>
          </div>
          <div className="col-md-5 col-lg-4 text-md-right">
            <Link href="/contact/" className="btn btn-blue">
              <Icon name="envelope" className="mr-3" size="sm" />Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
