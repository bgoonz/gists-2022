### Tinted Images with Multiple Backgrounds

```css
.tinted-image {
  
  width: 300px;
  height: 200px;
  
  background: 
    /* top, transparent red */ 
    linear-gradient(
      rgba(46, 137, 139, 0.45), 
      rgba(46, 137, 139, 0.45)
    ),
    /* bottom, image */
    url(http://subtlepatterns.com/patterns/wet_snow.png);
}
```
[CodePen](http://codepen.io/chriscoyier/pen/CkFni)   
The background property in CSS can accept comma separated values. "Multiple" backgrounds, if you will. You can also think of them as layered backgrounds since they have a stacking order. If we layer a transparent color over an image, we can "tint" that image.
   
Instead of using a transparent flood color using rgba() or hsla(), we can use a gradient. Gradients are technically background-images and thus not subject to the rule where they can't come first (be top) in the stacking order.