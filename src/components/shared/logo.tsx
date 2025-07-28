import { Link } from 'react-router';

import { ROUTES } from '@/configs/routes';
import { cn } from '@/lib/utils';

/**
 * SVGLogo component that renders the application logo as an SVG.
 * It can be used with a custom class name.
 *
 * @param {string} [props.className] - Optional class name for the SVG element.
 */
const SVGLogo = ({ className }: { className?: string }) => (
  <svg
    className={cn('size-20', className)}
    version='1.1'
    viewBox='0 0 1000 1000'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <g clipPath='url(#SvgjsClipPath1115)'>
      <rect fill='#3b82f6' height='1000' width='1000'></rect>
      <g transform='matrix(1.9672131147540983,0,0,1.9672131147540983,248.19672131147541,200)'>
        <svg
          height='305'
          version='1.1'
          viewBox='0 0 256 305'
          width='256'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <image
            height='305'
            width='256'
            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAExCAMAAACkioxcAAACRlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5+fn5+fn6+vr6+vr6+vr6+vr6+vr6+vr6+vr7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f37+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f37+/v7+/v7+/v7+/v8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz65Y6KAAAAwXRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0fICIjJCYqKy0vMTIzNDY4OTs8PT4/QEFCREVKS0xNTk9QUVJTVFVWV1hZW1xdXmBhZGZqa2xtbm9xcnl7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlZeYmZqdn6CipKWmp6ipqqusra6vsrO0tre4ubu8v8DExcfIyszNz9LT1NbX2Nrb3N3e3+Di4+Xm6Orr7O7v8PHy8/T19vf4+fr7/P3+t3M4YwAAAAFiS0dEAf8CLd4AAAVbSURBVHja7Z35WxVlGIYfMDJpAQk9ShRatmpotmCLlWnaAu2BVgaoiYgVtlhGppnm0oIthrbZblamHDYlPXH+s344oFdXgWfjnXfmee7/4L2vm4+ZOTPfh487SdlTDADAYJKUjan50Us6/2DlsIA/yQPAEc75T142IuArTgHtI/PjE/IA8B55AHidMoCKswKeYxTw8tn58RD3CgDMIw8AleQBoKCHTsBL+BefcwcAvEYeAB4nvgYAAMwhDwBFA9wBAJ9SCXjxP/NjDXkAWEAeACb2cQcA7OURsOH/5seT5AHgiiHuAID93AEADSQC2kaZHxV/U8w/EBtNAPZRCFg/6vxYSh4Azj/KHQDQFv35+6eOJaDqdOQFtGJM3uUOAJhNHkDkH4ucK4DI/0K0DudkH3cAQDV5AMCuCAcwJR0BM6L7ymAL0mId8woAAJf8zh0AsJg7AADvR1LA2rTnx/Tj3AEAtREU8AIy4R3Sa4AzlBzmDgCYeypa8/eWZygAT0VLwBpkzOYozd83JXMBxQeJV4DU1cBh6gAAzOqOioDVyI6aiNwZ916apQDcfYo6AACLE7wrQIq6BHUAAO4P/V9BX3lOAnDHyZALWIUcuSXcTwd6ynIVgCu/D7OAZuRObD91AAAmtlMHAAAPDzAHAADXf0cdAIBJ7UPMAQDAPX8wBwAApZtCFkG8DHnmtnBdEjQh7xTVx0MUwGSMA7E3ThMHkHqdclOCOIDU08KtYaigEeNIVUs3cQAAgMkN3xIHMPwD4luOtyDrLoUBF9zV4dXB8zBi0u2v/EAbwAgzH3nzEGsAZyivWb75oJu/h+4SBEP57CX1za9u6+zsOhAo9RBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQeSV245InVrZv2b7X8Pj0B32MXrXwme3fnAjgreCxzgswYsKchh3B7UPaFvD0U2u3HgvytfBgAyir3RP052Prg5u+6L4Pg/9+sD+wAKpaXHxLHlQA13X4+HIyo61i88etbo5hCCSA6k43X0YFEcBVux19GmYfwEWNnrYYtA9gqa9dRFqNx5++09e3kdYB1Hk7oN42gJK3vX0dbBvATUfcfR5tGsBjfyWZAyh2l38yzTOD8sO0LofzGwYw6xePG0S0mM0/3+V2MTntFZzZnZ/PM9nNArjT56a6ZivAIqc7RlkFsMDp9vJWAcztd7pH0Fqb+a/1ukdSrruFp0nFr0nqAC7+0uv8NitAwQ6v82d3ZEzGPOt2/n6Ti8CaBHcAFcfczm/yL6DggyR3AMv9zm9yG3j1IHcAhZ+RB/C03/mzOTcwYy7v8zt/9qeGZcA28gCqh7hXgMIuxwGsNgjggST3CjDhEHkAdUnuFeC8n8gDWOY5AIvbwC8cC1hlMP/N7AHsJF8Bpjk+X7SnzEDACvIVoOBH8gDmOQ6g2WB+bCQPoPA38gDmkweAVvIA8DV5AJV+H4U1mQTwqNv5x/vYuGE6yAOA20chcZMVADG3ATTaBHAv+QqAJvIAsIs8ALdroFUAFzq9DIpbHRx5DXkAWEi+Anh9K8QsAGxwOb/h0bFbyAPAR9wrAHDAowDLs4N/5l4BgKPkASDOvQIAJ8gDQII8APgLYCW4BcRLQy9gxQ25MBOhF7AMYUICJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJCBEHM8/iyCEEEKEgn8AsBAFwc4OxXgAAAAASUVORK5CYII='
          ></image>
        </svg>
      </g>
    </g>
    <defs>
      <clipPath id='SvgjsClipPath1115'>
        <rect height='1000' rx='300' ry='300' width='1000' x='0' y='0'></rect>
      </clipPath>
    </defs>
  </svg>
);

/**
 * Logo component that renders the application logo.
 * It uses an SVG image and wraps it in a Link to the home page.
 *
 * @param {string} [props.wrapperClassName] - Optional class name for the wrapper element.
 * @param {string} [props.className] - Optional class name for the SVG element.
 */
export const Logo = ({
  wrapperClassName,
  className,
}: {
  wrapperClassName?: string;
  className?: string;
}) => (
  <Link className={cn(wrapperClassName)} to={ROUTES.HOME}>
    <SVGLogo className={cn('size-20', className)} />
  </Link>
);
