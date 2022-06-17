def intToRoman(self, num: int) -> str:
        result = ''
        while num >= 1000:
            num = num - 1000
            result += "M"
        if num >= 900:
            num = num - 900
            result += "CM"
        if num >= 500:
            num = num - 500
            result += "D"
        if num >= 400:
            num = num - 400
            result += "CD"
        while num >= 100:
            num = num - 100
            result += "C"
        if num >= 90:
            num = num - 90
            result += "XC"
        if num >= 50:
            num = num - 50
            result += "L"
        if num >= 40:
            num = num - 40
            result += "XL"
        while num >= 10:
            num = num - 10
            result += "X"
        if num >= 9:
            num = num - 9
            result += "IX"
        if num >= 5:
            num = num - 5
            result += "V"
        if num >= 4:
            num = num - 4
            result += "IV"
        while num >= 1:
            num = num - 1
            result += "I"

        return result