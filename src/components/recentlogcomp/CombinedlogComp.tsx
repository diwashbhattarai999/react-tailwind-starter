import MainLog from './mainlog/MainLog';
import LogFilterComp from './LogFilterComp';
import Topmodal from './toplogcomp';

export default function CombinedlogComp() {
  return (
    <div className='max-w-[1258px] px-6'>
      <LogFilterComp />
      <div className=''>
        <Topmodal />
      </div>
      <MainLog />
    </div>
  );
}
