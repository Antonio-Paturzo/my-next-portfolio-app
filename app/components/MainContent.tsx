export default function MainContent() {
  return (
    <div className="relative overflow-hidden bg-primary-dark">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-quaternary-light sm:text-6xl">
              Antonio Paturzo
            </h1>
            <p className="mt-4 text-xl text-ternary-light">
              I am a Fullstack Developer, blending creativity and technical
              expertise to craft extraordinary digital experiences that
              captivate users and push boundaries.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                          alt="Coding on a laptop"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
                          alt="Programming at home"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                          alt="Info on a computer screen"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2glMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                          alt="Tech design pattern"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2glMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                          alt="Passion led us here"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2glMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                          alt="Macbook Pro colored"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1658998765622-962cb51e7888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRlY2glMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                          alt="Colorful design background"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/#link1"
                className="inline-block rounded-md border border-transparent bg-ternary-dark px-8 py-3 text-center font-bold text-slate-700 hover:bg-primary-light"
              >
                <strong>Learn More</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
