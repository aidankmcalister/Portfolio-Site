const AboutMeCard = () => {
  return (
    <div className="md:w-full my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 flex flex-col text-slate-300 max-w-lg font-rubik">
      <h1 className="text-2xl">
        <span className="text-lg text-slate-400">I'M</span> AIDAN MCALISTER
      </h1>
      <h5>
        <span className="text-sm text-slate-400">FROM</span> TULSA
        <span className="font-bold">,</span>&nbsp; OKLAHOMA
      </h5>
      <hr className="my-2 mt-1 w-full" />
      <p className="text-lg">
        A{" "}
        <span className="rainbow-gradient"> junior full-stack developer </span>
        who's all about making
        <span className="text-cyan-600"> cool stuff </span>
        happen on the web. I've got a
        <span className="text-cyan-600"> strong foundation </span>
        in web development, and I'm
        <span className="text-cyan-600"> excited</span> to bring my skills to
        your team. I pay attention to the small details, and I love
        <span className="text-cyan-600"> tackling challenges head-on</span> to
        create
        <span className="text-cyan-600"> outstanding user experiences</span>.
      </p>
      <div className="my-4"></div>
      <p className="text-lg">
        When I'm not coding, you can find me
        <span className="text-cyan-600"> diving into video games</span>,
        capturing moments through my camera lens, or
        <span className="text-cyan-600"> cruising on my motorcycle</span>. These
        passions have taught me
        <span className="rainbow-gradient"> teamwork</span>,
        <span className="rainbow-gradient"> creativity</span>, and the ability
        to
        <span className="rainbow-gradient"> adapt</span>, which I believe are
        <span className="text-cyan-600"> valuable traits</span> in this field.
        Let's team up and build something
        <span className="text-cyan-600"> amazing </span>
        together!
      </p>
    </div>
  );
};

export default AboutMeCard;
