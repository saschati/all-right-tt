import Emoji2 from '@/assets/img/icons/emoji/emoji-2.svg?react'
import Emoji3 from '@/assets/img/icons/emoji/emoji-3.svg?react'
import Emoji4 from '@/assets/img/icons/emoji/emoji-4.svg?react'
import EmojiBaby from '@/assets/img/icons/emoji/emoji-baby.svg?react'
import EmojiBiceps from '@/assets/img/icons/emoji/emoji-biceps.svg?react'
import EmojiBird from '@/assets/img/icons/emoji/emoji-bird.svg?react'
import EmojiBrain from '@/assets/img/icons/emoji/emoji-brain.svg?react'
import EmojiChart from '@/assets/img/icons/emoji/emoji-chart.svg?react'
import EmojiChick from '@/assets/img/icons/emoji/emoji-chick.svg?react'
import EmojiChild from '@/assets/img/icons/emoji/emoji-child.svg?react'
import EmojiCalendar from '@/assets/img/icons/emoji/emoji-calendar.svg?react'
import EmojiFaceWithDiagonalMouth from '@/assets/img/icons/emoji/emoji-face-with-diagonal-mouth.svg?react'
import EmojiFire from '@/assets/img/icons/emoji/emoji-fire.svg?react'
import EmojiHandshake from '@/assets/img/icons/emoji/emoji-handshake.svg?react'
import EmojiManCurlyHair from '@/assets/img/icons/emoji/emoji-man-curly-hair.svg?react'
import EmojiManInLotusPosition from '@/assets/img/icons/emoji/emoji-man-in-lotus-position.svg?react'
import EmojiManJuggling from '@/assets/img/icons/emoji/emoji-man-juggling.svg?react'
import EmojiMedalFirst from '@/assets/img/icons/emoji/emoji-medal-first.svg?react'
import EmojiMobile from '@/assets/img/icons/emoji/emoji-mobile.svg?react'
import EmojiMouth from '@/assets/img/icons/emoji/emoji-mouth.svg?react'
import EmojiNerdFace from '@/assets/img/icons/emoji/emoji-nerd-face.svg?react'
import EmojiOpenBook from '@/assets/img/icons/emoji/emoji-open-book.svg?react'
import EmojiPerson from '@/assets/img/icons/emoji/emoji-person.svg?react'
import EmojiPersonMage from '@/assets/img/icons/emoji/emoji-person-mage.svg?react'
import EmojiRabbit from '@/assets/img/icons/emoji/emoji-rabbit.svg?react'
import EmojiRaisedHand from '@/assets/img/icons/emoji/emoji-raised-hand.svg?react'
import EmojiRecurring from '@/assets/img/icons/emoji/emoji-recurring.svg?react'
import EmojiRocket from '@/assets/img/icons/emoji/emoji-rocket.svg?react'
import EmojiRockGoat from '@/assets/img/icons/emoji/emoji-rock-goat.svg?react'
import EmojiSmilingFaceWithHeartEyes from '@/assets/img/icons/emoji/emoji-smiling-face-with-heart-eyes.svg?react'
import EmojiSmirkingFace from '@/assets/img/icons/emoji/emoji-smirking-face.svg?react'
import EmojiSnail from '@/assets/img/icons/emoji/emoji-snail.svg?react'
import EmojiStars from '@/assets/img/icons/emoji/emoji-stars.svg?react'
import EmojiStudent from '@/assets/img/icons/emoji/emoji-student.svg?react'
import EmojiThumbsUp from '@/assets/img/icons/emoji/emoji-thumbs-up.svg?react'
import EmojiTrex from '@/assets/img/icons/emoji/emoji-trex.svg?react'
import EmojiTurtle from '@/assets/img/icons/emoji/emoji-turtle.svg?react'
import EmojiUnicorn from '@/assets/img/icons/emoji/emoji-unicorn.svg?react'
import EmojiWomanDancing from '@/assets/img/icons/emoji/emoji-woman-dancing.svg?react'
import EmojiWomanTeacher from '@/assets/img/icons/emoji/emoji-woman-teacher.svg?react'

const emojiMap = {
  '2': Emoji2,
  '3': Emoji3,
  '4': Emoji4,
  baby: EmojiBaby,
  biceps: EmojiBiceps,
  bird: EmojiBird,
  brain: EmojiBrain,
  chart: EmojiChart,
  chick: EmojiChick,
  child: EmojiChild,
  calendar: EmojiCalendar,
  'face-with-diagonal-mouth': EmojiFaceWithDiagonalMouth,
  fire: EmojiFire,
  handshake: EmojiHandshake,
  'man-curly-hair': EmojiManCurlyHair,
  'man-in-lotus-position': EmojiManInLotusPosition,
  'man-juggling': EmojiManJuggling,
  'medal-first': EmojiMedalFirst,
  mobile: EmojiMobile,
  mouth: EmojiMouth,
  'nerd-face': EmojiNerdFace,
  'open-book': EmojiOpenBook,
  person: EmojiPerson,
  'person-mage': EmojiPersonMage,
  rabbit: EmojiRabbit,
  'raised-hand': EmojiRaisedHand,
  recurring: EmojiRecurring,
  rocket: EmojiRocket,
  'rock-goat': EmojiRockGoat,
  'smiling-face-with-heart-eyes': EmojiSmilingFaceWithHeartEyes,
  'smirking-face': EmojiSmirkingFace,
  snail: EmojiSnail,
  stars: EmojiStars,
  student: EmojiStudent,
  'thumbs-up': EmojiThumbsUp,
  trex: EmojiTrex,
  turtle: EmojiTurtle,
  unicorn: EmojiUnicorn,
  'woman-dancing': EmojiWomanDancing,
  'woman-teacher': EmojiWomanTeacher,
}

export type EmojiName = keyof typeof emojiMap

export default emojiMap
