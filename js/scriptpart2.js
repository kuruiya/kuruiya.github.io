let currentChapter = 1; // Variable to track the current chapter
let fontSize = 16; // Default font size

// Chapter content stored in an array
const chapters = [    {

        title: "บทที่ 6 : งุนงง",

        content: `
            ตุบ</br></br> ตุบ</br></br> ๆ</br></br> ๆ</br></br> ๆ</br></br> ๆ</br></br> .</br></br>.</br>.</br>.</br></br>
            เสียงหัวใจของผมดังจนได้ยิน ตอนนี้ผมรู้แล้วว่าเธอต้องการจะบอกอะไร </br>
            แต่ทำไมผมถึง ไม่ได้ยินเสียงอย่างอื่นเลยล่ะ</br></br>
            เอื๊ยด เอื๊ยด </br></br>
            ผมกำลังเดินลงมาที่ชั้นสาม</br></br>
            เอ๊ะ</br></br>
            ทุกอย่างมันเป็นอย่างนี้อีกแล้ว</br>
            ผมไว้ผมยาวมากจึงสังเกตุได้ว่าผมของผมมันเปลี่ยนสีไป</br></br>
            อีกแล้วหรอ</br></br>
            เส้นผมสีขาวเงินเริ่มปกคลุมไปทั่วหัวของผม</br>
            อาการปวดหัวก็เริ่มจะเกิดขึ้น และตาขวาที่ปวดขึ้นมาอีกแล้ว ครั้งนี้มันอยู่นานจนผมรู้ตัวจนได้รู้ว่ามันปวดตรง ๆ ที่นัยน์ตาเลย</br></br>
            ห้ะ อะไรอีกเนี่ย</br></br>
            บรรยากาศที่เริ่มเปลี่ยนไปมันเหมือนลมไม่ได้กระแทกตัวผม แต่เป็นตัวผมที่กระแทกกับสายลม</br>
            ถึงชั้นสองแล้ว</br></br>
            อีกแล้วจริงด้วย </br></br>
            อลิซ ที่กำลังวิ่งลงทางบันไดชั้นสอง แต่สิ่งที่แย่ที่สุดคือ</br></br>
            เธอหยุดนิ่งไป... อีกแล้วว. มันเกิดขึ้นอีกแล้ว</br></br>
            ผมไม่คิดว่าการเกิดสื่งนี้ขึ้นจะเกิดจากผมหรอกนะ</br></br>
            *พุบ*</br></br>
            เสียงลมกระทบที่ลำคอของผม</br></br>
            ไม่. ไม่ ไม่..ม่ายย</br></br>
            *ตู้ม!!*</br></br>
            ฝนเลือดละเลงลงที่ตัวของผม เธอไม่รอด... ไม่ สิ่งดี ๆ มันพึ่งจะเกิดเองนะ </br>
            น้ำสีแดงละเลงลงทั้งตัวของผม ย้อมเสื้อนักเรียนสีขาวของผม จนเป็นสีแดงชาด</br>
            ตัวของอลิซระเบิดอย่างปริศนา ไม่เหลือแม้แต่ซาก</br>
            เหตุการณ์บ้า ๆ นี่เกิดขึ้นเป็นครั้งที่สอง แต่ครั้งนี้มันแย่กว่า</br>
            ผมรู้สึกเหมือนเลือดค่อย ๆ หายไปจากร่างกาย ทั้งร่างชาไปหมด</br>
            ผมเอามือเช็ดจมูกก่อนเอาขึ้นมามอง ดูเหมือนว่าเลือดเริ่มไม่ไหลแล้ว</br></br>
            เราจำได้ว่า มันทำงานอย่างนี้แต่ทำไมมันถึงเกิดอย่างนี้ขึ้น</br>พลังของเราคือการสร้างสรรค์ และลบล้างความเจ็บปวด</br></br>
            ดูเหมือนสีเลือดที่ระเบิดออกจะเริ่มเปลี่ยนเป็นสีเทา พร้อมกับการที่เลือดมันเริ่มไหลช้าลง</br>
            จากนั้นบรรยากาศมันจะเริ่มกลับมาแล้ว ลมเริ่มพัดผ่านตัวผมอีกรอบ</br>
            17 วินาที</br>
            ที่ผมอยู่ในห้วงที่ทุกอย่างหยุดนิ่ง
            ทุกอย่างกลับมาเป็นแบบเดิมแล้ว
            แต่สีแดงทุกอย่างที่เกิดขึ้น ทั้งทีเสื้อ กำแพง พื้น ทุกอย่างสะอาดเหมือนไม่มีอะไรเกิดขึ้น</br></br>
            อีก.. แล้ว.. หรอ..</br></br>
            เสียการควบคุมอีกแล้ว ผมหมดสติอีกแล้ว.....
        `
    },
    {
        title: "บทที่ 7 : นี้เราฝันอยู่หรอ",
        content: `
            ติ๊ด </br>
ติ๊ด </br>
 ติ๊ด </br>
ติ๊ด </br>
ติ๊ด </br>
ติ๊ด </br>
 ติ๊ด </br>
เสียงนาฬิกาปลุกดังขึ้น </br>
 เช้า อีกครั้ง ตอนนี้เช้าแล้ว เมื่อวานหมดสติไป  </br> </br>
ข้างล่างๆ </br> </br>
ผมร้อนรนคิดว่าตำรวจน่าจะมาแล้วแต่ </br></br>
ว่างเปล่า </br>
เราฝันอยู่หรอ มันคงเป็นแค่ฝันสินะ</br>
ฮะ ฮะ ...ฮะ เราฝันอยู่หรอ งั้นก็ไม่มีอะไรผิดแปลกไป </br></br>
ผมเริ่มคิดต่าง ๆ นา ๆ เกี่ยวกับความเป็นไปได้</br> เพื่อลบภาพจำสิ่งที่เกิดขึ้นที่ผ่าน ๆ</br> มาก่อนอื่นก่อนใดก็ขอเช็กดูโทรศัพท์ก่อนเถอะ</br></br>
06:01 วันที่ 18 กรกฎาคม </br></br>

ห้ะ.......</br></br>

วันที่ที่แสดงอยู่แสดงวันที่ไม่ควรจะเป็นไป หากเหตุการณ์นั้นเป็นฝัน เราจะมาตื่นวันนี้ไม่ได้ แล้วยังตื่นมาที่เตียงอีก</br> ถ้าเหตุการณ์เมื่อวานมีอยู่เราก็ควรจะนอนอยู่ที่โรงเรียนสิผมนั่งทบทวนเหตุการณ์ทุกอย่างที่เกิดขึ้นจน 07:45 </br>
แต่งตัวไปโรงเรียนก่อนดีกว่า ตอนนี้ผมอยากสลัดความคิดบ้า ๆ ทั้งหมด ออกจากหัวแล้ว ผมเริ่มหยิบเสื้อผ้าขึ้นมาใส่แล้วกำลังเตรียมตัวออกจากบ้าน ผมจัดคอเสื้อให้เรียบร้อย</br></br>

เอ๊ะ</br></br>

ด้านหลังตรงคอเสียของผมมันมีรูยาวที่ไม่ลึกมากอยู่ </br></br>

ห้ะ </br></br>

อย่าบอกนะว่ามันคือลมที่ตีคอของผมเมื่อวาน ใช่ ใช่แล้วมันอยู่ในตำแหน่งเดียวกัน......</br></br>
ผมเลือกตัดความคิดฟุ้งซ่านออกไปจากหัวและเดินไปโรงเรียน </br></br>
จริงด้วยสินะ</br></br>
ที่นี้ ที่ลานกว้าง ที่ที่ทุกคนเข้าแถวกันอยู่ผมมองไม่เห็นคนที่ใกล้เคียงเธอคนนั้นเลย </br>
ฉันไม่ควรอยู่ที่นี้ ฉันจะทำให้ทุกอย่างพินาศ 
ผมรู้นะว่าผมทำอะไรลงไปตอนนี้ผมคิดแค่เพียงว่าการมีอยู่ของผม มันทำให้คนรอบตัวค่อย ๆ หายไปทีละคน ตอนนี้คงต้องรอให้ห้วงที่ทุกอย่างหยุดนิ่งเกิดขึ้นอีกสักครั้งก่อน ดูเหมือนผมจะต้องทำให้ตัวเองเข้าใจสิ่งที่เกิดขึ้นก่อน ผมเดินมาที่โฮมรูมที่ห้องคณิตศาสตร์</br></br>

ทุกอย่างเป็นเหมือนเมื่อวานเลย</br></br>

ผมเริ่มคิดทบทวนความรู้สึก และการรับรู้ในห้วงนั้น ตาข้างขวาจะปวดรุนแรงกระทันหัน  หัวจะปวดอย่างกะไมเกรนขึ้น จากนั้นตาขวาก็จะเริ่มสูญเสียการมองเห็น และใช่ ใช่ ผมนึกออกอีกหนึ่งอย่างที่เกิดขึ้นในขณะนั้น ผมหายใจไม่ออก</br></br>
Hello do you accept my question?</br></br>
เสียงที่คุ้นเคยดังมาจากประตูห้อง มันคงไม่มีอะไรหรอก</br> เราเพียงแค่คิดเยอะเกินไป</br></br>

ริวตอบหน่อยสิ... สรุป yes or no</br></br>

ห้ะนั้นไม่น่าใช่เสียงที่ผมหลอนขึ้นมาเองแล้วแหละแต่มันเป็นไปไม่ได้นิ </br>
ผมหันหน้าไปมองทางขวา ก่อนสบตากับใบหน้าที่คุ้นเคย </br>
ผมยาวสลวยที่มัดไว้ด้านหลัง แววตาอันเยือกเย็น</br></br>

อลิซ!?..... หรอ....
        `
    },
    {
        title: "บทที่ 8 : พลังของเธอ",
        content: `ผมรู้นะว่ามันอาจจะฟังดูบ้า แต่.. อลิซที่ผมระเบิดทิ้งไปเมื่อวาน ได้มายืนอยู่ต่อหน้าผมในขณะนี้ ผมไม่ได้ฝันไปแน่ ๆ แต่.. ห้ะ ผมคงต้องถามอะไรบางอย่าง ผมจึงไดถามอลิซเสียงดัง</br></br>
อลิซ..  เธอมีพลังอะไรหรอ</br></br>
ทุกอย่างในห้องเงียบสงัด</br></br>
*เสียงคนกระซิบกัน*</br></br>
ดูเหมือนว่าจะมีคนพูดซุบซิบเบา ๆ ในห้อง ผมเริ่มรู้สึกสับสนงุนงง ผมพูดอะไรผิดไปหรอ</br></br>
เธอ..ก็..ไม่ต้อง..พูด..เป็นภาษาไทยก็ได้นะ...</br></br>
อลิซหลบหน้าแล้วพูดกับผม ดูเหมือนว่าเธอกำลังหน้าแดงอยู่ แต่ทำไมล่ะ เอ่อออ...
อ... อย่าบอกนะว่า ด้วยความที่ผมเป็นคนไม่เข้าสังคม ผมจึงลืมส่วนนี้ไป การรับรู้ถึงพลังของคนอื่น มันเปรียบเสมือนการเรียกชื่อจริงในภาษาญี่ปุ่นเลย มันอาจจะเป็นการป่าวประกาศว่า ผมกับเธอ เป็นแฟนกันก็ได้ </br></br>
ค.. คำตอบคือ.... ช.. ใช่สินะ</br></br>
อลิซพูดขึ้น แก้มของเธอแดงอย่างกะเนื้อแตงโม ดูเหมือนว่าตอนนี้ผมทำอะไรผิดแล้วแหละ </br></br>
ไปเจอกันที่เดิมนะ หลังเลิกเรียน อลิซพูดขึ้นมา</br></br>
อ.. โอเค ไว้เจอกันตอนเลิกเรียนนะ</br></br>
หน้าเธอแดงมากเลย ฮาๆๆ </br>
ห้ะ อะไร ฉัน </br></br>
ผมไม่รู้ตัวเลย ว่าตัวเองกำลังเขินอยู่</br></br>
เธอก็เหมือนกันนั้นแหละ</br></br>
ผมคุย โต้ตอบกันไปมาจนครูเข้าคาบ เราเริ่มสนิทกันแล้วสินะ สนุกเป็นบ้าเลย</br>

ตอนนี้เลิกเรียนแล้วครับ ผมกับอลิซยังไม่คุยอะไรกันหลังจากตอนเช้า ตอนเที่ยงที่ผมกินข้าวอยู่เธอก็หายไปไหนไม่รู้ 
ขณะนี้ผมเดินมาตึกดนตรีที่เดิม </br></br>
ริว ริว อยู่นี่ ๆ มานี่เร็ว </br></br>
เธออยู่ตรงบรรไดตึกดนตรีเหมือนเดิม</br></br>
กำลังไป ๆ </br></br>
ผมตะโกนกลับไป ดีที่ ที่นี้ไม่มีคน ไม่งั้นผมคงไม่กล้าตะโกน</br>
เดินมาถึงกันแล้ว อยู่ดี ๆ อลิซก็มากอดแขนผมเฉยเลย แต่ก็ไม่เป็นไรหรอก เราทั้งสองเดินไปนั่งลงที่ม้านั่งใต้ตึกดนตรี </br></br>
สรุปเธอตอบว่าใช่ ใช่ไหมล่ะริว?</br>
เออ...ช.. ใช่</br>
งั้นตอนนี้เราก็เป็นแฟนกันแล้วนะ</br>
โอ..เค งั้นอลิซช่วยตอบคำถามเมื่อเช้าทีได้ไหม</br>
งั้นเธอต้องเก็บเป็นความลับนะ</br>
ได้ ฉันไม่บอกใครหรอกน่า..</br></br>
อลิซค่อย ๆ โน้มตัวมาที่หูของผม ผมจะได้รู้แล้วว่าเธอมีพลังอะไรกันแน่ มันอาจจะเป็นก้าวสำคัญที่ทำให้ผมไขเรื่องที่เกิดขึ้นเมื่อวานกับที่ร้านลุงชัยก็ได้</br></br>
พลังของฉันหนะ... คือ....

        `
    },
        {
        title: "บทที่ 9 : แฟ้มข้อมูล",
        content: `ผมไม่เข้าใจเลย</br> ผมคิดว่าการรับรู้พลังของเธอมันไม่ช่วยให้ผมไขอะไรได้ซักอย่าง แต่มันไม่ได้ช่วยอะไรผมเลย </br></br>

ตอนกลับผมแวะไปที่ร้านลุงชัย ดูเหมือนว่าลุงจะไม่เปิดกิจการ ไปถามป้าตึกข้าง ๆ แกก็บอกว่า ลุงชัยเสียชีวิตแล้ว พอถามว่ายังไงแกก็เอาภาพให้ดู </br></br>

พอแล้วครับ ๆ </br></br>

ผมเห็นแล้วทุกอย่างมันไม่ได้มีอะไรผิดไปจากตอนนั้น แต่ว่า</br></br>

พฤกษาหนะ ฉันใช้พลังพฤกษา</br>
แล้วมันทำอะไรได้อะ</br>
ก็แค่การควบคุมสารประเภทพืชต่าง ๆ เช่น การเร่งการเจริญเติบโตของพืชอะไรประมาณนั้นแหละ</br>

คำตอบของเธอ ไม่ได้ช่วยให้ความสงสัยในหัวผมกระจ่างขึ้นมาเลย เธอมีพลังพืชจริง ๆ หรอ แต่ตอนนั้นเธอก็ทำให้ดูแล้วนิ</br></br>

เธอดูนี้นะ</br></br>

เธอเดินไปจับต้นไม้ที่บรรได ก่อนที่ต้นไม้ต้นนั้นจะมีดอกบานขึ้นมา</br></br>

ฉันทำให้ต้นไม้ต้นนี้โต จนมีดอกขึ้นมาเลย</br></br>

เราก็เห็นแล้วนิ หรือเราแค่คิดไปเองทุกอย่างเลยนะ </br>
ตอนนี้ผมนอนอยู่ห้อง ไฟยังไม่เปิดเลย นอนคิดเรื่องนั้นอยู่บนเตียงตั้งแต่ตอนกลับบ้าน ผมยังไม่เข้าใจเลยว่าทุกอย่างมันเกิดขึ้นได้ยังไง แต่เรื่องพลังของผมมันเป็นเกี่ยวกับฮีลจริงหรอ</br></br>

แล้วเธอหละมีพลังอะไร ตาเธอแล้ว</br>
เอ่ออ... พลังของฉันหรอ</br>
ใช่ ใช่ ฉันก็อยากรู้เหมือนกันนะ</br>
พลังของฉันคือ การรักษา หนะ</br>
เอ่อ.. คือว่า มันอยู่ในหมวดไหนหรอ</br>
ฉันก็ไม่รู้เหมือนกัน แต่ฉันสามารถทำให้บาดแผลกลับมาปิดเหมือนเดิมได้นะ ถึงจะเจ็บซ้ำสองก็เถอะ</br>
น่าสนใจจังเลย</br>
ฮะ ๆ ใช่ ๆ</br>

แม้แต่เธอยังสงสัยเลย พลังของเรามันคือพลังฮีลจริงหรอ</br> แต่ในบัตรเรามันก็เขียนอย่างนั้นนะ แล้วเราก็เคยใช้มันจริง ๆ ด้วย บัตร บัตร ใช่งั้นแค่เราก็แค่หาสิ่งที่ใช้ยืนยันตัวตนของคนในห้องเราก็น่าจะรู้แล้วว่าจริง ๆ เธอใช้พลังอะไร </br></br>

เอ๊ะ จะว่าไปต---------- --------------------------</br>
เอ๊ะ เราพูดว่าอะไรหนะ ความจำสั้นจริง ๆ เลยริวว</br></br>

ผมพูดกับตัวเอง
ผมนอนผ่านคืนนั้นไปด้วยความตื่นเต้นที่จะได้รู้ข้อมูลพลังของเธอ จริง ๆ แล้วเธอใช้พลังอะไรกันน้าา</br></br>

19 กรกฎาคม</br>
07:30 </br></br>

เราพร้อมแล้ว</br></br>

ผมพูดกับตัวเองผ่านกระจก และยิ้มด้วยความมั่นใจ ก่อนเดินออกไปจากบ้าน</br></br> มุ้งหน้าสู่โรงเรียน


        `
    },
    {
        title: "บทที่ 10 : เงียบไว้ริว",
        content: `สวัสดีจ้ะริว! </br></br>
เสียงของอลิซดังขึ้นในขณะที่ผมกำลังเดินมาที่แถว</br>
เธอวิ่งมากอดแขนผมเหมือนเมื่อวาน </br></br>

นี่ นายสมองไหลนี่ เป็นแฟนกับเธอหรอ</br>
ใช่!</br></br>

เพื่อนคนนึงในแถวถามขึ้น แต่อลิซก็ตอบไปอย่างมั่นใจ</br> ดูเหมือนการคบกับดาวโรงเรียน อาจจะไม่สวยหรูอย่างที่คิด</br> ในแถวเริ่มมีเสียงซุบซิบอีกแล้ว</br></br>

เฟย เฟย ฉันว่าเธอไม่ควรประเมิณคนจากภายนอกนะ</br></br>

อลิซพูดเสียงแข็งต่อหน้าเพื่อนคนั้น ดูเหมือนว่าเขาจะชื่อ เฟย เฟย ล่ะ</br>
ดูไปผมก็คิดว่าเป็นผู้ชายอยู่นะ ถึงแม้จะเป็นผู้หญิงก็เถอะ เป็นทอมสินะ</br> เอมมี่ที่ยืนอยู่ตรงนี้ เป็นเพศที่ 3 หรอ เธอทำหน้าไม่พอใจขึ้นมาด้วยแหล</br>ะ</br>

ฉันชื่อริวนะ</br>
ไม่อยากรับรู้เว้ย! </br></br>

ดูเหมือน เฟย เฟย จะไม่อยากทำความรู้จักกับผมเลย ผมอยู่ในคลาสนี้มาจน ม 5</br> แล้ว รู้สึกว่าที่ผ่านมาน่าจะรู้จักแค่อลิซนี้แหละ แต่ทำไมหละ</br> อุตส่าห์จะทำความรู้จัก ใจร้ายจังนะ</br></br>

อย่าอะไรให้อลิซไม่พอใจโดนฉันแน่</br></br>

เฟย เฟยกล่าวเสียงดัง ผมนิ่งเงียบก่อนที่อลิซจะลากแขนไปที่แถว </br></br>

ตอนนี้ผมอยู่ในห้องโฮมรูม อลิซเธอย้ายมานั่งข้าง ๆ โต๊ะผมเฉยเลย</br> ด้วยความที่โต๊ะจัดเป็นคู่ พวกเราเลยใกล้ชิดกันเป็นพิเศษ</br> ผมรอให้อาจารย์ประกาศเสร็จ จึงจะแอบเข้าไปในห้องทะเบียน</br> เพื่อดูข้อมูลของอลิซ แต่ตอนนี้ดูเหมือนเธอยังจะไม่ปล่อยมือจากผมเลย</br></br>

เอาล่ะตอนบ่ายจะมีสอบภาษาไทย ของอาจารย์ไพรทูล นะ อย่าขาดกันล่ะ</br></br>

ดูเหมือนวันนี้โชคจะไม่เข้าข้างผมเลย</br> ใกล้สอบแล้วอาจารย์ส่วนใหญ่จึงให้นักเรียนอ่านหนังสือ</br> แต่อาจารย์ภาษาไทยกลับรีบสอบซะงั้น ผมต้องแอบดูให้เสร็จก่อนคาบไทยจะเริ่ม</br> ไม่เช่นนั้นอาจารย์ไพรทูล ไม่น่าให้ผมเข้าสอบ</br></br>

ริว เธอเป็นอะไรหนะ เห็นเหม่อตั้งแต่เมื่อกี้แล้ว</br>
ไม่มีอะไรหรอกฉันแค่คิดเรื่องสอบนิดหน่อย</br></br>

อลิซมองหน้าผมก่อนจะ มองไปทางอื่น</br></br>

เดี๋ยวฉันมาคาบไทยนะพอดีมีทุนธุระ ต้องไปทำหนะ</br>
โอเค อย่ามาสายนะ</br></br>

ดูเหมือนว่าแผนจะไปได้ดี ตอนนี้ผมเดินออกมาจากห้องแล้ว</br></br>

*วืด*</br></br>

โอ้ย อะไรเนี่ย</br></br>

ตรงบันไดจะถูพื้นยังไม่เสร็จ น้ำแฉะเต็มไปหมด แต่แม่บ้านไม่คิดจะติดป้ายอะไรหน่อยหรอ </br>
ตอนนี้ผมเดินมาที่ ด้านนอกของห้องทะเบียบแล้ว ตรงนี้เป็นที่ค่อนข้างปิด เลยไม่มีใครเข้ามา แต่ผมลืมไปว่าห้องทะเบียนอยู่ชั้นสอง ผมเดินกลับพร้อมกับแผนในหัว </br></br>

*แฉะ*</br></br>

ผมเดินเหยียบน้ำขังด้านหลัง ทั้ง ๆ ที่แน่ใจแล้วว่าจะไม่เปียก แต่ก็ชั่งมันเถอะ ผมเดินไปหยิบ กิ่งไม้เป็น ๆ สองท่อนมาต่อกัน กันจะเริ่มดึงพลังของผมมาใช้ สมัยเด็กผมเคยทำให้เพื่อนดู กิ่งไม้ที้งสองค่อย ๆ ผสานกันจนสนิท ผมชืมบอกไป ที่โรงเรียนการใช้พลังเป็นสิ่งต้องห้าม เพราะอาจทำใหห้เกิดเหตุที่ไม่ตั้งใจได้ แต่ที่นี่ไม่มีใครเห็นนิ ผมเริ่มต่อไม้ไปเรื่อย ๆ จนมีความยาว 6 เมตรเห็นจะได้ ผมคิดในหัวให้ไม้มันอ่อนลงจนเป็นเหมือนเถาวัลย์
ตอนนี้ผมอยู่ ณ จุดเดิมที่ผมขึ้นไม่ได้ แต่ตอนนี้ผมมีไม้นี่แล้ว ผมโยนไม้ขึ้นไปที่ราวระเบียงให้คล้องกันจากนั้นผมก็มัดแล้วปืนขึ้นไป</br>

เอ่อ.. อันไหนกันเนี่ย </br></br>

ข้างหน้าของผมคือลิ้นชักที่เก็บเอกสารข้อมูลของนักเรียน</br> แต่มันมีเป็นร้อยเรียงกันอยู่ ผมหศห้องปัจจุบัน 

ม 5/3 </br>

เจอแล้ว แฟ้มนี้แหละ ผมเปิดแฟ้มแล้วค้นหาชื่อของ อลิซทันที </br></br>

ไม่ใช่ </br>
อืมม ไม่ใช่</br>
เจอแล้ว ๆ </br></br>

ผมเจอเอกสารข้อมูลของอลิซแล้ว</br></br>

นางสาว วาสนา ประเสริฐงาม </br>
ไม่มีข้อมูลพ่อแม่ </br>
สูง 169 น้ำหนัก 52 กิโลกรัม</br>
Celestial gift : พฤกษา</br></br>

ห้ะ พ.. พฤกษา ผมทำอะไรอยู่ที่นี้ เธอไม่ได้โกหกนิ แล้วทำไมเธอยังเป็นอะไรเลย ทั้ง ๆ ทีลุงชัยก็..</br></br>

*จิก*</br></br>

มีอะไรแทงหลังเราอยู่</br>
500 mg un..cons......cious เริ่ม..อ่อน.แรง.แล้ว </br>
ภาพตัดอีกแล้วหรอ.......
        `
    }
];

// Function to update the chapter content
function updateChapter() {
    const contentDiv = document.querySelector('.content');
    if (!contentDiv) {
        console.error('Content div not found!');
        return;
    }
    contentDiv.innerHTML = `
        <h2>${chapters[currentChapter - 1].title}</h2>
        <p class="story-text">${chapters[currentChapter - 1].content}</p>
    `;
    // Apply current font size
    document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    scrollToTop();
}

// Function to go to the next chapter
function nextChapter() {
    if (currentChapter < chapters.length) {
        currentChapter++;
        updateChapter();
    } else {
        alert('คุณกำลังไปสู่พาร์ทที่ 2 อลิซ');
        window.location.href = 'the_one_part2.html';
    }
}

// Function to go to the previous chapter
function previousChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        updateChapter();
    } else {
        alert('คุณอยู่บทแรกแล้ว');
    }
}

// Function to adjust font size
function adjustFontSize(increment) {
    fontSize += increment;
    // Limit font size
    fontSize = Math.max(12, Math.min(24, fontSize));
    document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    localStorage.setItem('fontSize', fontSize.toString()); // Save font size
}

// Function to toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString()); // Save dark mode state
}
// Function to return to the main page
function mainpath() {
    window.location.href = "1.html";
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}
// Function to search text in the content
function searchText() {
    const searchTerm = document.getElementById('search-input').value;
    const storyText = document.querySelector('.story-text');
    const content = storyText.innerText;

    if (content.includes(searchTerm)) {
        alert(`พบคำว่า "${searchTerm}" ในเนื้อหา`);
        storyText.innerHTML = content.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
    } else {
        alert(`ไม่พบคำว่า "${searchTerm}" ในเนื้อหา`);
    }
}

// Function to share on Facebook
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Function to share on Twitter
function shareOnTwitter() {
    const text = encodeURIComponent('อ่านเรื่องนี้ที่น่าสนใจมาก!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Function to share on Line
function shareOnLine() {
    const text = encodeURIComponent('อ่านเรื่องนี้ที่น่าสนใจมาก! ' + window.location.href);
    window.open(`https://social-plugins.line.me/lineit/share?url=${text}`, '_blank');
}

// Text-to-Speech Functionality
let speech = new SpeechSynthesisUtterance();
speech.lang = 'th-TH';

function startSpeech() {
    const storyText = document.querySelector('.story-text').innerText;
    speech.text = storyText;
    window.speechSynthesis.speak(speech);
}

function pauseSpeech() {
    window.speechSynthesis.pause();
}

// Function to populate the sidebar with chapter links
function populateSidebar() {
    console.log('Populating sidebar...'); // Debugging
    console.log('Chapters:', chapters); // Debugging

    const chapterList = document.querySelector('.chapter-list');
    if (!chapterList) {
        console.error('Chapter list element not found!'); // Debugging
        return;
    }

    chapterList.innerHTML = ''; // Clear existing content

    chapters.forEach((chapter, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = chapter.title;
        link.onclick = () => {
            currentChapter = index + 1;
            updateChapter();
            toggleSidebar(); // Close sidebar after selecting a chapter
        };
        listItem.appendChild(link);
        chapterList.appendChild(listItem);
    });
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
window.onload = function () {
    populateSidebar(); // Populate the sidebar with chapters
    loadProgress(); // Load reading progress if available
};

// Save reading progress
function saveProgress() {
    const scrollPosition = window.scrollY;
    localStorage.setItem('readingProgress', scrollPosition);
}

// Load reading progress
function loadProgress() {
    const scrollPosition = localStorage.getItem('readingProgress');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
}

// Load progress when the page loads
window.onload = loadProgress;

// Save progress when the user scrolls
window.onscroll = saveProgress;
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString()); // Save dark mode state
}

// Function to adjust font size
function increaseFontSize() {
    adjustFontSize(2); // Increase font size by 2px
}

function decreaseFontSize() {
    adjustFontSize(-2); // Decrease font size by 2px
}
// Load saved settings and progress
function loadProgress() {
    const savedChapter = localStorage.getItem('currentChapter');
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedChapter) {
        currentChapter = parseInt(savedChapter);
    }
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
        document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    }
    if (savedDarkMode) {
        isDarkMode = savedDarkMode === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
    }

    updateChapter(); // Load chapter after settings
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition));
    }
}
// Save progress when the user scrolls
window.onscroll = saveProgress;