http://blog.iconfinder.com/detecting-duplicate-images-using-python/  

```
SELECT pk, hash, BIT_COUNT(
        CONV(hash, 16, 10) ^ CONV('4c8e3366c275650f', 16, 10)
    ) as hamming_distance
        FROM image_hashes
        HAVING hamming_distance < 4
        ORDER BY hamming_distance ASC;
```