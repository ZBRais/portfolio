import React from 'react';

function Skill() {
  return (
    <div className="flex flex-auto justify-center">
      {/* Skill */}
      <div className='h-2/3 w-2/3 bg-inherit flex flex-col items-center justify-center p-6 rounded-lg shadow-[15px_15px_25px_5px_#f56565,-8px_-15px_40px_10px_#805ad5]'>
        <p className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold mb-4 p-2 text-3xl md:text-4xl lg:text-5xl text-center rounded-full">
            Dev Skill
        </p>
        <img
            className="w-3/5"
            src="https://skillicons.dev/icons?i=nodejs,react,nextjs,postgres,graphql,prisma,git&perline=4"
            alt="Skill Icons"
        />
      </div>
    </div>
  );
}

export default Skill;
{/*
shadow-[10px_16px_34px_46px_#6E6F4E06,8px_14px_11px_14px_#AC1E4B9A,8px_-9px_40px_28px_#200C8CB0]
box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);
shadow-[10px_16px_34px_46px_#6E6F4E06,8px_14px_11px_14px_#AC1E4B9A,8px_-9px_40px_28px_#200C8CB0]
*/}