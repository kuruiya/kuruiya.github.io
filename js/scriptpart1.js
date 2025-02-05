let currentChapter = 1; // Variable to track the current chapter
let fontSize = 16; // Default font size

// Chapter content stored in an array
const chapters = [
    {
        title: "บทที่ 1 : ปฐมบท",
        content: `
            ในโลกที่พลังแห่งธรรมชาติอยู่กับผู้คนทุกหนทุกแห่ง</br>
            ทุกคนคือผู้ครอบครองพลังที่แตกต่างกันไป แต่มีเพียง 3 พลังเท่านั้นที่สามารถเปลี่ยนแปลงชะตาและสมดุลของจักรวาลได้</br>
            พลังลำดับที่ 1 คือ พลังอำนาจอันลึกล้ำแห่งกาลเวลา พลังลำดับที่ 2 คือ พลังแห่งการบงกาลตรรกระ พลังอย่างสุดท้าย </br> 
            ซึ่งเป็นพลังที่เคยมีอยู่ในอดีต ไม่ถูกเปิดเผย ไม่มีข้อมูล และไม่มีการกล่าวถึง</br>
            การกำเนิดของผู้ครอบครองพลังเหล่านี้จึงถูกจับจ้องจากผู้มีอำนาจ รวมถึงรัฐบาล</br>
            ผู้ครอบครองพลังจะถูกไล่ล่า และกำจัดเพื่อตัดขาดอำนาจ และถ่วงดุลไม่ให้มีผู้ใช้พลังเหล่านี้....
            </br></br>
            หนังสือตำนานโลก มันฟังดูเกินจริงนะ พลังที่สามารถเปลี่ยนแปลงชะตาและสมดุลของจักรวาลได้ เวอร์ไปมั้ง?</br></br>
            ผมคิดในใจในขณะที่อ่านหนังสือตำนานโลกที่ไปยืมมาจากห้องหนังสือ พร้อมพยุงคางไว้ขณะที่มองออกไปนอกหน้าต่าง</br>
            แสงแดดสีส้มส่องผ่านกระจก ทำให้ใบไม้สั่นไหวไปกับสายลม เสียงอาจารย์ที่กำลังสอนตณิตศาสคร์</br>
            เป็นเพียงพื้นหลังที่ไร้ความหมายเท่านั้น</br></br>
        `
    },
    {
       title: "บทที่ 1 : ปฐมบท",
        content: `
                    ริว! เธออ่านหนังสือในคาบครูมาตั้งแต่เมื่อกี้แล้วนะ</br></br>

            เสียงอาจารย์ลอยมาตามสายลมที่กระแทกหน้าผมเบา ๆ </br></br>

            ทำไมฉันต้องมานั่งฟังเรื่องพวกนี้ด้วย
            </br></br>
            ผมที่บ่นออกมาเบาๆ ผมไม่เคยสนใจการเรียนหรือเพื่อนร่วมชั้นเลย </br>
            การจากไปของพ่อและแม่ยังรบกวนจิตใจผมอยู่เสมอ ทุกครั้งที่นึกถึงมันก็รู็สึกโกรธ</br>
            และเจ็บปวดทุกครั้ง ผมที่ทำเพียงบิดตัวหลบหน้าอาจารย์เท่านั้น</br>
            ในขณะที่หน้าของผมหันออกทางหน้าต่างพร้อมกับตาที่มองไปรอบ ๆ ห้อง</br>
            นักเรียนคนอื่น ๆ ต่างตั้งใจฟังครูสอน บางคนจดโน๊ต บางคนยกมือถามคำถาม</br>
            แต่สำหรับผมทุกอย่างมันดูไร้สีสัน ผมไม่รู็สึกว่าตนเองมีตัวตนอยู่ในโลกนี้เลย</br></br>
            *กริ๊งงงง*
            </br></br>
            เสียงของออดโรงเรียนดังขึ้น ทุกคนเริ่มเก็บโต๊ะ และเก็บกระเป๋าออกจากห้องกันแล้ว</br>
            ผมที่เหลือบตามองไปเห็น อลิซ สาวสวยประจำโรงเรียนนี้ </br>
            ที่มีชื่อเสียงในด้านความฉลาดและความสง่างาม ผมสีดำของเธอ</br>
            พริ้วไหวไปกับทุกย่างก้าวที่เดิน แววตาของเธอคมกริบแต่แฝงไปด้วย</br>
            ความลึกลับที่อธิบายไม่ได้</br>
            <img src="../asset/image/the-one/theone.jpeg" alt="Alice" style="width: 300px; height: auto;"></br>
            </br></br>
            เธอมองกลับมาที่ผมเพียงชั่วครู่ก่อนจะเดินผ่านไปโดยที่ไม่ได้พูดอะไร</br>
            ผมแปลกใจที่จ้องเธอนานเกินไป แต่ก็สะดุ้งที่เธอมองกลับมาเช่นกัน</br>
            แววตาอันเยือกเย็นของเธอสบตากับผม จนต้องรีบหันหน้าหนี</br>
            และเดินออกจากห้องไป
            `
    },
    {
        title: "บทที่ 2 : ค่ำคืนอันสิ้นสูญ",
        content: `
            ค่ำวันนั้น ผมเลือกเดินไปที่ร้านก๋วยเตี๋ยวของลุงชัยที่ผมมักไปกินเป็นประจำ ลุงชัยเป็นคนเดียวที่ผมรู้สึกสนิทด้วย ลุงมักจะเล่าเรื่องราวสมัยก่อนให้ผมฟัง และให้คำแนะนำที่ผมต้องการเสมอพลังของลุงคือน้ำ 
            น้ำจากธรรมชาติสร้างสรรค์ของลุงชัยทำเกี๋ยวเตี๋ยวมาให้ผมกินหลังนั่งลงที่โต๊ะ</br></br>

            เสียงของกระดิ่งดังขึ้นพร้อมกับก๋วยเตี๋ยวชามใหญ่จะมาเสริฟที่โต๊ะของผม</br></br>

            เองเป็นไงมาไงล่ะ วันนี้? เสียงของลุงชัยเอ่ยถาม</br></br>

            ก็เหมือนเดิมครับ ลุง ผมตอบส่งเบาๆ ก่อนจะเริ่มกินก๋วยเตี๋ยวที่ลุงทำให้

            ลุงชัยนั่งลงตรงข้ามผม ก่อนถามด้วยความสงสัยว่า </br></br>ตาไปโดนอะไรมาหนะ ใส่คอนแทคเลนส์หรอ เขียวเชียว</br></br>

            ผมเงียบไปสักครู่ ก่อนจะตอบด้วยเสียงเบาๆ </br></br>ไม่นะครับผมไม่ใส่อะไรแบบนั้นหรอก</br></br>

            ลุงชัยเริ่มขมวดคิ้ว และมาเปิดตาขวาของผม </br></br>อะไรหนะเหมือนตัวเลขเลย พลังธรรมชาติรึ</br></br>
`

    },
    {
            title: "บทที่ 2 : ค่ำคืนอันสิ้นสูญ",
            content: `
                     ผมเริ่มรู้สึกแปลกใจกับคำถาม เริ่มครุ้นคิดในใจว่า</br></br>อะไร
            ตาเราเป็นอะไร ตัวเลขในตา ห้ะ?</br>



            ไปทำไรมาเนี่ย ตาเริ่มมีแสงเฉยเลย</br></br> ลุงพูดพร้อมค้ำคาง แล้วทำหน้าสงสัย</br>

            ผมเริ่มรู้สึกรู้สึกปวดหัวอย่างรุนแรง มันเหมือนมีอะไรบางอย่างกำลังดึงดูดพลังจากภายในตัวของผม ผมพยายามควบคุมตัวเอง แต่ก็ไม่ได้ สายตาของผมเริ่มพร่ามัว และรู้สึกตาเริ่มสูญเสียการมองเห็น</br></br>

            ริว! เป็นไรหนะ?</br></br> ลุงรีบวิ่งเข้ามาหาผม</br>

            แต่ก่อนที่ผมจะตอบอะไรได้ไป พลังบางอย่างก็ระเบิดออกจากตัว ทุกสิ่งรอบตัวหยุดนิ่ง แม้แต่ลมที่พัดผ่านก็หยุดลง ผมเห็นลุงยืนนิ่งเหมือนรูปปั้น ก่อนที่ศีรษะของลุงจะระเบิดออกเป็นเศษฝุ่นกระจายไปในอากาศ</br>

            ผมตกใจสุดขีด ไม่รู้ว่าควรจะทำอะไรดี </br></br>ทุกอย่างจริงรึเปล่า </br></br>ก่อนที่จะมองลงไปที่มือเปื้อนเลือด ผมร้องออกมาด้วยความหวาดกลัวและเจ็บปวดสุดขีด ผมมองดูมือตัวเองที่สั่นเทา และสังเกตเห็นว่าเส้นผมทุกเส้นกำลังเปลี่ยนจากสีน้ำตาลเข้มเป็นสีขาวเงิน

            </br></br>นี่...นี่มันบ้าอะไรวะเนี่ย</br></br> ผมก้มลงมองพื้น ขณะที่เลือดเริ่มไหลออกจากจมูกและปากของผม</br></br>
            ทุกอย่างมืดสนิทเลย
        `
    },
    {
        title: "บทที่ 3 : ถัดวันเคร่งคลาย",
        content: `
            17 กรกฎาคม
            ณ บ้านของริว 197 หมู่ 3 </br>
            ในวันใหม่จากวันเดิมอันพวง(พะ-วง) แสงสุริยาสาดส่องลงที่ตาของผม เป็นสัญญานวันใหม่ที่ดี แต่ในหัวของผมมันเต็มไปด้วย ภาพวันวานที่ร้านก๋วยเตี๋ยว ภาพเหล่านั้นยังคงทำให้ผมรู้สึกคลี่นไส้อยู่เป็นระยะ ๆ ตาที่ขวารู้สึกปวดหน่อย ๆ คงไม่มีอะไรแปลกไปหรอกมั้ง  </br></br>
            ว่าแต่..... ผมมานอนอยู่ที่บ้านได้ยังไง</br></br>
            ผมครุ้นคิดอยู่ครู่ใหญ่ มันไม่มีเหตุผลอะไรเลยที่ผมจะกลับมาอยู่ที่นี้ได้ ผมเลิกคิดไปก่อน จึงหยิบโทรศัพท์ขึ้นมาเช็คเวลา ดูเหมือนว่าตอนนี้จะเป็นเวลา 6 โมง 32 มีเวลาเหลือเฟือก่อนจะไปเข้าแถวตอนเวลา 8 โมง ตอนนี้อยู่ชั้นสองของบ้านซึ่งเป็นห้องนอนของผมเอง</br></br>
            ฉันเป็นอะไรไป ทำไมเรื่องราวมันถึงเป็นอย่างนี้ ตำรวจจะต้องรู้ทุกอย่างแน่นอน </br></br> ผมพูดทุกอย่างพร้อมมองหน้าตัวเองในกระจกห้องน้ำ แต่เหมือนอาการตาแปลก ๆ เมื่อวานดูเหมือนมันก็ไม่เป็นสีเขียวแล้ว แต่แสบเป็นบ้าเลย ผมของผมที่เป็นสีขาวเงินเมื่อคืน ก็มีเพียงบางส่วนที่ตีนผม ที่ยังเป็นสีขาวอยู่ </br></br>
`

    },
    {
      title: "บทที่ 3 : ถัดวันเคร่งคลาย",
      content: `            
         นี้เรามีพลังฮีลนิ ทำไมถึงเกิดการระเบิดขึ้น ทำไมตาถึงมีสีเขียว ทำไมผมถึงเปลี่ยนสี</br></br>

            คำถามต่าง ๆ เริ่มพลั้งพลู่ออกมา ดูเหมือนว่าผมคงรอเพียงแค่การมาถึงของผู้พดุงความยุทติธรรม เท่านั้น แต่ตอนนี้ก็คงทำอะไรไม่ได้ผมปลงแล้วหละกับชีวิตที่มันไม่เหลืออะไรสักอย่าง ผมคงต้องไปโรงเรียนก่อนแล้วค่อยให้ตัวผมในอนาคตคิดเรื่องที่พึ่งผ่านไปแล้วกัน</br>

            ผมแต่งตัวอย่างช้า ๆ ดูเหมือนว่าผมก็ยังเหม่อคิดอยู่กับเรื่องเดิม ๆ อยู่ ดี</br></br>
            เอาน่า.. อยู่ในคุกก็คงไม่ได้แย่ขนาดนั้นหรอก</br></br>
            คำปลอบใจที่ออกจากปากของผม ที่หวังว่าคำปลอบใจเหล่านั้นจะทำให้ผมรู้ดีขึ้น </br></br>
            07:42  </br></br>ผมมองดูเวลาในโทรศัพท์ที่กำลังฟ้องให้ผมรีบไปโรงเรียนได้แล้ว ผมเดินเท้าไปโรงเรียนที่ห่างจากตัวบ้าน 1 กิโลเมตร </br></br>
            `
    },
    {
      title: "บทที่ 3 : ถัดวันเคร่งคลาย",
      content: `     
                  ตอนนี้ผมได้เดินมาถึงหน้าโรงเรียนแล้ว ตาของผมสบกับบางอย่างที่คุ้นเคย เธอคนนั้นที่ตีกเคมีชั้นสอง อลิซ เธอมองมาที่ฉันหรอ ตาเราสองจ้องมองกันเธอจะส่งยิ้ม แล้วก็หลบหน้าไป </br></br>

            อีกแล้วหรอ</br></br>

            ผมรู้สึกว่าแก้มตัวเองกำลังแดงฉาน ตัวของผมนั้นเริ่มร้อนขึ้นมา มันคืออาการเขิน ฉันกำลังเขินฉันชอบเธอหรอ</br></br>
            อะไรของฉันว่ะเนี่ย</br></br>
            ผมเดิมมาเข้าแถวต่อจากอลิซที่กำลังคุยกับเพื่อนในแถวอย่างสนุกสนาน ดูเหมือนชะตาจะเริ่มเล่นตลกกับผม</br></br>
            ฉันมีคนที่ขอบแล้วหล่ะ</br></br>
            เสียงของอลิซดังขึ้นแว้ว ๆ ในบทสนทนานั้น ทำให้ผมเริ่มคิดอะไรบางอย่างถึงความเป็นไปได้</br></br>
            ทำไมฉันต้องคิดอะไรแบบนี้ด้วยน้าาา</br></br>
            เสียงผมดังขึ้นเบา ๆ พร้อมกับความรู้สึกเขินที่มาเป็นครั้งที่สอง
            `
        
         },
        {
        title: "บทที่ 4 : ไม่ชอบมาพากล",
        content: `
            ตอนนี้เวลา 8 โมง 31 </br> เลิกแถวแล้วผมได้หลุดพ้นจากความคิดที่ขึ้นมาในหัวขณะอยู่ในแถวแล้ว ผมเดินจากแถวเข้าห้องโฮมรูมที่ห่างจากที่นี้อีก 200 เมตร ณ ตึกคณิต รับฟังครูชี้แจงเรื่องสอบนิดหน่อยเกี่ยวกับเรื่องสอบกลางภาค จากนั้นจึงเดินไปที่ตึกภาษาไทยที่ครูกำลังจะสอน </br>
            *ตึก*</br>
            ผมนั่งลงที่โต๊ะหลังสุดแบบที่เคยทำ อาจารย์กำลังสร้างน้ำผสมหมึกเขียนลงหนังสือบันทึกประจำวัน เพื่อเตรียมการสอนสำหรับวันนี้ ไม่เท่าเทียมเลยแฮะ</br></br>
            นั่งดัวยได้ไหม</br></br>
            เสียงเด็กผู้หญิง ดังขึ้นข้างหลังของผม ห้ะ! เด็กผู้หญิงมาขอนั่งด้วย ไม่ ๆ โชคชะตามันซัดผมอีกแล้ว เหมือนเรื่องมันถูกเขียนบนนิยายรักยังไงอย่างนั้น แล้วคนที่เป็นตัวละครสำคัญกลับเป็นสาวในโรงเรียนอีก</br></br>
            นี้เธอทำแบบฝึกหัดรึยังอะ</br>
            ท..ทำ ต.ตั้งแต่เมื่อ ว..วานแล้ว</br></br>
            ผมตอบกลับด้วยเสียงตะกุกตะกัก มันแทบจะเป็นครั้งแรกที่ผมคุยกับผู้หญิงวัยเดียวกัน ผมรู้สึกทำตัวไม่ถูกเลย..</br></br>

        `
    },
    {
      title: "บทที่ 4 : ไม่ชอบมาพากล",
      content: `
                  เยี่ยมเลย ฉันเห็นเธอในห้องมานานแหละ ทำไมถึงไม่ตั้งใจเรียนหละ</br>

            ฉัน ม..ไม่อยากเรียนทำไหร่หนะ</br></br>

            เอาหละเลิกคาบแล้ว ไปกินข้าวเที่ยงนะทุกคน</br></br>
            เสียงของอาจารย์วิชาภาษาไทยประกาศจบคาบ แต่มันเพิ่งจะเริ่มคาบไปไม่กี่นาทีเองนะ </br></br>
            จบคาบไว้จังเลยนะ ริว</br>
            น..นั้น สินะ</br>
            เธอจะไปกินข้าวไหนหล่ะ</br>
            ฉันจะไปกินข้าวที่โรงอาหารหนะ</br></br>
            ดูเหมือนว่าอลิซจะ เป็นคนที่เฟรนลี่มากเลย </br>
            ผมเก็บกระเป๋าพร้อมเดิน ไปที่โรงอาหาร ดูเหมือนว่าวันนี้อลิซเธอจะตามผมมาด้วยแหละ รู้สึกว่าวันนี้จะเป็นโชคดีเป็นพิเศษ แต่ เหตุการณ์เมื่อวานก็ยังคงวนเวียนในหัวผมอยู่เสมอ ภาพที่หัวมนุษย์เป็น ๆ หนึ่งตนระเบิดออกโดยไร้ฉนวน คิดอย่างนี้ผมก็รู้สึกคลื่นไส้ขึ้นมาเลย</br></br>
            เป็นอะไรอะ หน้าซีดเชียว</br></br>
            เสียงของอลิซเอ่ยถามด้วยความสงสัย</br></br>
      `
    },
    {
      title: "บทที่ 4 ไม่ชอบมาพากล",
      content:`
            ไม่มีอะไรหรอก</br></br>

            ผมต้องตอบไปก่อน ผมไม่อยากพูดถึงเรื่องนั้น หรือแม้แต่คิดผมยังไม่อยากคิดเลย</br>
            ผมเดินมานั่งลงที่ เก้าอี้โรงอาหารตัวเดิม </br></br>
            ขอนั่งด้วยนะ </br>
            อืม</br></br>
            อลิซมาขอนั่งด้วยอีกแล้ว ผมเรื่องรู้สึกชินแล้วหละกับการคุยกับผู้หญิงแต่ก็ยังสลัดความเขินออกไม่ได้อยู่ดี</br>
            ที่โรงอาหารวันนี้ ผมก็มีเพื่อนกินข้าวแล้วแหละ</br>
            ผมไปที่ห้องเรียนเคมี หลังจากที่กินข้าวเสร็จ ดูเหมือนอลิซก็ยังตามผมตัวไม่ห่างอยู่ดี คำถามคือ อะไรคือเหตุที่เธอเดินตามผมไปทุกที่ พอเริ่มคิด เรื่องรัก ๆ ใคร่ ๆ ก็เด้งขึ้นมาในหัวอีกแล้ว</br>
            ดูเหมือนว่าชีวิตผมจะเริ่มมีชีวิตชีวาขึ้นมาเฉยเลย</br>
            ผมเดินมาเรื่อย ๆ จนมาถึงห้องเคมีที่มีหินแสงวูบวาบอยู่แทบทั่วห้อง ตอนที่ผมกำลังจะนั่งดูเหมือนว่าอลิซก็เดินแยกจากผมแล้ว</br></br>
            เจอกันหน้าอาคารดนตรีนะ ตอนเลิกคาบฉันจะเดินไปรอ
      `
    },
    {
        title: "บทที่ 5 : Perfect",
        content: `
            ดูเหมือนว่าอลิซจะเดินไปหาเพื่อนดังเดิมแล้ว อยู่ดี ๆ ก็รู้สึกเจ็บอกขึ้นมาเลย ผมคงเอาใจไปอยู่ตรงนั้นแล้วแหละ แต่ก็แปลกนะที่ตำรวจปล่อยผมลอยชาย กับคดีเมื่อวานจนบ่ายขนาดนี้ แต่แบบนี้ก็ดีแล้วแหละ ถึงจะรู้สึกเหมือนนักโทษหนีคดีก็เถอะ คาบนี้ผมลองตั้งใจฟังอาจารย์ คาบเรียนก็ไม่ได้น่าเบื่ออะไรขนาดนั้น ผมเริ่มรู้สึกผิดที่ไม่ตั้งใจเรียนเลย ขณะนั้นก็เริ่มลืมเรื่องเมื่อวานแล้วและก็รู้สึกอยากให้เวลาผ่านไปเร็ว ๆ จัง</br></br>
            โอเคนักเรียนคาบนี้เลิกแล้ว</br>
            ริว เธอดูตั้งใจเรียนขึ้น ทำแบบนี้ทุกวันก็ดีนะ</br></br>
            อาจารย์เดินมาข้าง ๆ ก่อนพูดพร้อมยิ้มขึ้นมา มันรู้สึกดีนะที่มีคนมาชมเรา แต่วันนี้ดูเหมือนว่าอาจารย์ทุกคนจะมีธุระไปหมดเลยนะ เวลาแค่บ่าย สามสิบนาทีอาจารย์ก็ประกาศเลิกคาบแล้ว</br>
            คงไม่มีอะไรผิดแปลกไปหรอกนะ ผมหยิบโทรศัพท์ขึ้นมาดูเวลา
        `
    },
    {
      title:"บทที่ 5 : Perfect",
      content: `
                  </br></br>15:56 นาที</br></br>
                  กว่าจะเลิกคาบนานจังเลยอะ</br>

            เนอะ ๆ สอนวนไปวนมาอยู่นั้นแหละ</br></br>

            เสียงเพื่อนในห้องพึมพำในขณะเดินออกจากห้อง จากแสงแสบ ๆ ในตอนบ่าย ก็กลายเป็นแสงสีส้ม ขึ้นมา </br>
            มันใช่หรอที่เวลาผ่านไปไวขนาดนั้น</br></br>
            เราก็เรียนเต็มคาบนิ ทำไมถึงรู้สึกว่ามันพึ่งผ่านไปแค่ 30 นาที</br></br>
            ผมพูดกับตัวเอง และหยุดชะงักตรงทางเดิน ทุกอย่างมันดูงุนงงไปหมดเลย</br></br>
            เจอกันที่ที่นัดไว้นะ</br></br>
            เสียงที่ได้ยินตลอดทั้งวันมากระซิบข้างหู ก่อนเธอคนนั้น อลิซจะวิ่งลงอาคารไป</br>
            ผมเดินไปที่อาคารดนตรีที่ อลิซ นัดไว้ </br>
            เธออยู่นั้นอยู่หน้าบรรไดอาคารดนตรี อาคารไม้เก่าแก่ตั้งแต่เริ่มสร้างโรงเรียน</br></br>
      `
    },
    {
      title:"บทที่ 5 : Perfect",
      content: `
                  ริว! มานี่ ๆ </br></br>

            อลิซเรียกผมเสียงดัง </br>

            ผมเดินไปหาก่อนเอ่ยถามว่า</br></br>
            มีอะไรหรอ ที่นัดฉันมาที่นี้</br>
            ขึ้นไปชั้นสี่ก่อนสิ เดี๋ยวฉันจะบอก</br></br>
            *สับ*</br></br>
            หัวผมมันลอยไปแล้ว ไม่ มันยังไม่ไปไหน อะไรเมื่อกี้ คืออะไร </br>
            รู้สึกเหมือนตัวเองหัวหลุดไปแล้วเลย </br></br>
            ไปกันเถอะ</br></br>
            อลิซพูดขึ้นก่อนวิ่งขึ้นอาคารไป</br></br>
            ร..รอก่อน</br></br>
            อลิซไปไม่รอผมเลย</br>
            ผมรีบวิ่งตามไปที่ชั้นสี่ </br>
            ที่นี้ไม่มีคนเลย เสียงเงียบเฉียบ มีเพียงเท้าเหยียบพิ้นดัง เอี๊ยด อ๊าด กับผู้หญิงตรงหน้าเท่านั้น</br></br>
      `
      
    },
    {
      title:"บทที่ 5 : Perfect",
      content:`
                  ฉันอยากจะบอกว่า..</br>

            เดี๋ยวอลิซ ฉันขอถามอะไรหน่อยสิ</br></br>

            เสียงของผมพูดคั้น ก่อนที่อลิซจะพูดอะไร ผมก็พูดถามไป</br></br>
            ฉันขอถามหน่อยสิ</br>
            อะไรหรอ</br>
            เธอรู้สึกว่าวันนี้แปลก ๆ ไหม</br>
            ก็..ไม่นะ ทำไมหรอ</br>
            ฉันคงคิดไปเองแหละ</br></br>
            ถึงจะถามไปแล้วผมก็รู้สึกว่ามันเหมือนจริงเกินไปอยู่ดี</br></br>
            แล้วเธอมีอะไรอยากพูดกับฉันหรอ</br>
            อ่อ..เรี่องนั้น...ฉันเอ่อ</br></br>
            แก้มของอลิซแดงขึ้นมา พร้อมบิดตัวไปมา เธอจะพูดว่าอะไรกับเรากันนะ</br></br>
            ฉันชอบเธอหนะ
      `
    }

];

// Function to update the chapter content
function updateChapter() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = `
        <h2>${chapters[currentChapter - 1].title}</h2>
        <p class="story-text">${chapters[currentChapter - 1].content}</p>
    `;
    scrollToTop();
}

// Function to go to the next chapter
function nextChapter() {
    if (currentChapter < chapters.length) {
        currentChapter++;
        updateChapter();
    } else {
        alert("คุณกำลังไปสู่พาร์ทที่ 2 อลิซ");
        window.location.href = "the_one_part2.html";
    }
}

// Function to go to the previous chapter
function previousChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        updateChapter();
    } else {
        alert("คุณอยู่บทแรกแล้ว");
    }
}

// Function to increase font size
function increaseFontSize() {
    fontSize += 2;
    document.querySelector('.story-text').style.fontSize = fontSize + 'px';
}

// Function to decrease font size
function decreaseFontSize() {
    if (fontSize > 12) {  // Prevent font size from becoming too small
        fontSize -= 2;
        document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
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