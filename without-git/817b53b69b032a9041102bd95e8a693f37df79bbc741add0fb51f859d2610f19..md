[composition.tsx](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-composition-tsx)
```js
 import  Composition  from  'src/lib/Composition'; |```js
 import  NewsBanner  from  './index'; 
  
 const  {  component,  compositionFunction  }  =  Composition(NewsBanner)(({  fields  })  =>  { 
 return  { 
 icon:  fields?.['Icon  Path']?.value, 
 rounded:  fields?.Rounded?.value, 
 title:  fields?.Title, 
 body:  fields?.Body, 
 bgColorClass:  fields?.['BG  Color']?.fields?.Value?.value, 
 cta:  { 
 href:  fields?.['CTA  URL']?.value?.href, 
 target:  fields?.['CTA  URL']?.value?.target, 
 text:  fields?.['CTA  URL']?.value?.text, 
 }, 
 }; 
 }); 
  ```js
 export  {  compositionFunction  }; ```js
 export  default  component; 
 
```
[Raw](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6/raw/361e64e0a957ee6ec48d3ff1ddf5e202c8416af3/data.js)Copy

[data.js](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-data-js)
```js
 export  const  Data  =  { 
 fields:  { 
 'Icon  Path':  { 
 value:  { 
 src:  'https://scdev13.duke-energy.com/_/media/images/flipboard/flipboard-electric-vehicle.jpg', 
 alt:  'Image  Alt  Text', 
 }, 
 }, 
 Rounded:  { 
 value:  true, 
 }, 
 Title:  { 
 value:  'Here  to  help  during  this  difficult  time.', 
 }, 
 Body:  { 
 value: 
 'Customers  who  need  additional  time  to  pay  any  outstanding  balance  may  qualify  for  financial  assistance.  Learn  how  we  are  taking  action  to  help  in  response  to  COVID-19.', 
 }, 
 'BG  Color':  { 
 fields:  { 
 Value:  { 
 value:  'bg-teal-lighter', 
 }, 
 Setting:  { 
 value:  'Teal', 
 }, 
 }, 
 }, 
 'CTA  URL':  { 
 value:  { 
 href:  '/test/newsbanner/cta', 
 target:  '_self', 
 text:  'View  Resources', 
 }, 
 }, 
 }, 
 }; 
```

[Raw](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6/raw/361e64e0a957ee6ec48d3ff1ddf5e202c8416af3/index.tsx)Copy

[index.tsx](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-index-tsx)

```js
 import  {  Text  }  from  '@sitecore-jss/sitecore-jss-react'; |```js
 import  LazyImage  from  'src/components/LazyImage'; |```js
 import  Button  from  'src/components/Button'; |```js
 import  NewsBannerTypes  from  './types'; 
  
 const  NewsBanner  =  ({  icon,  rounded,  title,  body,  bgColorClass,  cta  }:  NewsBannerTypes)  =>  { 
 const  isSVG  =  icon?.src?.includes('.svg'); 
 const  hasCTA  =  typeof  cta?.href  !==  'undefined'; 
 const  iconSize  =  isSVG  ?  'icon-48  sm:icon-76'  :  'icon-76  sm:icon-122'; 
 const  iconRounded  =  rounded  ?  'rounded-full'  :  ''; 
 const  theme:  NewsBannerTypes['theme']  = 
 bgColorClass  ===  'bg-teal-lighter' 
 ?  {  textColor:  'text-gray-dark',  btnVariant:  'secondary'  } 
 :  {  textColor:  'text-white',  btnVariant:  'secondary-reversed'  }; 
  
 return  ( 
 <div  className={`${bgColorClass}`}> 
 <div  className="container-3xl  md:flex  md:justify-center  md:items-center  text-center  p-24"> 
 <LazyImage 
 className={`flex-shrink-0  mx-auto  mb-16  md:mr-32  md:mb-0 
 ${iconRounded}  ${iconSize}`} 
 {...icon} 
 /> 
 <div  className={`mb-16  md:mr-32  md:text-left  ${theme.textColor}`}> 
 <Text  className="mb-12  text-xl"  tag="h3"  field={title}  /> 
 <Text  className="lg:line-clamp-3"  tag="p"  field={body}  /> 
 </div> 
 {hasCTA  &&  ( 
 <Button  className="flex-shrink-0"  variant={theme.btnVariant}  {...cta}> 
 {cta?.text} 
 </Button> 
 )} 
 </div> 
 </div> 
 ); 
 }; 
  ```js
 export  default  NewsBanner; 
```
[Raw](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6/raw/361e64e0a957ee6ec48d3ff1ddf5e202c8416af3/stories.js)Copy

[stories.js](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-stories-js)
```js
 import  React  from  'react'; |```js
 import  {  Data  }  from  './data'; |```js
 import  {  compositionFunction  }  from  './composition'; |```js
 import  NewsBanner  from  './index'; 
  
 const  props  =  compositionFunction(Data); 
  ```js
 export  default  { 
 title:  'components/NewsBanner', 
 component:  NewsBanner, 
 argTypes:  { 
 bgColorClass:  { 
 options:  ['bg-teal-lighter',  'bg-blue'], 
 control:  {  type:  'radio'  }, 
 }, 
 rounded:  { 
 options:  [true,  false], 
 control:  {  type:  'boolean'  }, 
 }, 
 }, 
 }; 
  
 const  Template  =  args  =>  <NewsBanner  {...args}  />; 
  ```js
 export  const  Primary  =  Template.bind({}); 
  
 Primary.args  =  {  ...props  }; 
```
[Raw](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6/raw/361e64e0a957ee6ec48d3ff1ddf5e202c8416af3/test.tsx)Copy

[test.tsx](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-test-tsx)
```js
 import  {  screen  }  from  '@testing-library/react'; |```js
 import  '@testing-library/jest-dom'; |```js
 import  {  renderWithContext  }  from  'src/lib/testWrappers'; |```js
 import  {  Data  }  from  './data'; |```js
 import  NewsBanner  from  './index'; |```js
 import  {  compositionFunction  }  from  './composition'; 
  
 const  props  =  compositionFunction(Data); 
 jest.mock('src/lib/useIntersection'); 
  
 describe('NewsBanner  Component',  ()  =>  { 
 it('should  render  with  title  &  image',  ()  =>  { 
 renderWithContext(<NewsBanner  {...props}  />); 
  
 const  title  =  screen.getByText(Data.fields.Title.value); 
 const  img  =  screen.getByRole('img'); 
  
 expect(title).toBeInTheDocument(); 
 expect(img).toBeInTheDocument(); 
 }); 
  
 it('should  render  CTA  component  if  data  exists',  ()  =>  { 
 const  {  rerender  }  =  renderWithContext(<NewsBanner  {...props}  />); 
  
 const  ctaText  =  screen.getByText(Data.fields['CTA  URL'].value.text); 
  
 expect(ctaText).toBeInTheDocument(); 
  
 const  noCTAProps  =  {  ...props,  cta:  {}  }; 
  
 rerender(<NewsBanner  {...noCTAProps}  />); 
  
 expect(ctaText).not.toBeInTheDocument(); 
 }); 
 }); 
```
[Raw](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6/raw/361e64e0a957ee6ec48d3ff1ddf5e202c8416af3/types.ts)Copy

[types.ts](https://gist.github.com/bgoonz/426f05a637c595206e062cc5c2f27db6#file-types-ts)
```js
 import  {  ButtonTypes  }  from  '../Button/types'; 
  
 type  ThemeTypes  =  { 
 textColor:  string; 
 btnVariant:  ButtonTypes['variant']; 
 }; 
  
 interface  NewsBannerTypes  { 
 icon:  JSS.ImageField['value']; 
 rounded?:  boolean; 
 title:  JSS.TextField; 
 body:  JSS.TextField; 
 bgColorClass?:  string; 
 color?:  string; 
 cta?:  JSS.LinkField['value']; 
 theme?:  ThemeTypes; 
 } 
  ```js
 export  default  NewsBannerTypes; 
