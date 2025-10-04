"use client";
import { Mail, Cable, FolderGitIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id = "contact" className = "z-10">
    <div className="container mx-auto max-w-5xl justify-center align-center pointer-events-auto">
      <div className="bg-card p-8 rounded-lg shadow-xs border border-gray-200">
        <h3 className="text-2xl text-glow font-semibold mb-3 justify-center align-center courier-font">
          {" "}     
          contact <span className="courier-font text-primary"> me </span>
        </h3>

        <div className="space-y-6 justify-center">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />{" "}
            </div>

            <div className="mt-2">
              <a
                href="mailto:isabellayoeu@ucla.edu"
                className="mt-3 text-muted-foreground hover:text-primary transition-colors courier-font"
              >
                isabellayoeu@ucla.edu
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 justify-center">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Cable className="h-6 w-6 text-primary" />{" "}
            </div>

            <div className="mt-2">
              <a
                href= "https://linkedin.com/in/isabella-yoeu"
                className="courier-font mt-3 text-muted-foreground hover:text-primary transition-colors"
              >
                isabella yoeu | linkedin
              </a>
            </div>
          </div>
        </div>


                <div className="space-y-6 justify-center">
          <div className="flex items-start space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <FolderGitIcon className="h-6 w-6 text-primary" />{" "}
            </div>

            <div className="mt-2">
              <a
                href="https://github.com/izzy-u/oscillating-wave-with-cables"
                className="courier-font mt-3 text-muted-foreground hover:text-primary transition-colors"
              >
                background visuals | github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
