function Frame3() {
  return <div className="bg-[#fb655d] shrink-0 size-[16px]" />;
}

function Frame4() {
  return <div className="bg-[#313638] shrink-0 size-[16px]" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#dae2e5] w-[611px]">
      <p className="css-4hzbpn font-['Moderat:Medium',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[0px] text-[40px] w-[min-content]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <span className="text-[#fb655d]">Zero-Sharding</span>
        <span>{` Architecture`}</span>
      </p>
      <p className="css-4hzbpn font-['Moderat:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[24px] w-[473px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        Lorem ipsum dolor sit amet consectetur. Ullamcorper semper adipiscing quis posuere eget sollicitudin quis faucibus volutpat. Suspendisse dui rhoncus facilisi eu tincidunt. Morbi turpis augue sagittis enim diam sed a.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[239px_11px] items-start px-[32px] py-[30px] relative w-full">
          <Frame3 />
          {[...Array(3).keys()].map((_, i) => (
            <Frame4 key={i} />
          ))}
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fb655d] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[56px] py-[65px] relative w-full">
          <p className="css-4hzbpn font-['Moderat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[619px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>{`Strong sentences to show what is the result of this benefit.  Maybe it can be 2-3 sentences.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0a0a0a] flex-[1_0_0] h-[809px] min-h-px min-w-px overflow-clip relative">
      <div className="absolute left-[144px] size-[419px] top-[93px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419 419">
          <circle cx="209.5" cy="209.5" id="Ellipse 21" r="209" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
      <div className="absolute h-[78px] left-[191px] top-[266px] w-[324px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 324 78">
          <ellipse cx="162" cy="39" fill="var(--fill-0, #D9D9D9)" id="Ellipse 22" rx="162" ry="39" />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['Moderat:Regular',sans-serif] leading-[normal] left-[239px] not-italic text-[24px] text-black top-[289px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        *Image place holder
      </p>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="bg-black content-stretch flex gap-[11px] items-center p-[8px] relative size-full">
      <Frame6 />
      <Frame />
    </div>
  );
}