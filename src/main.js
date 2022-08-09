import { Blank } from '@/components/Blank/Blank'
import { Edit } from '@/components/Edit/Edit'
import { Word } from '@/components/Word/Word'
import { HeaderBlue } from '@/components/HeaderBlue/HeaderBlue'

import './assets/scss/main.scss'

const word = new Word('#app', {
    components:[HeaderBlue, Edit, Blank,]
});
word.render()