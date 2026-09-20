export type Answer = 'A'|'B'|'C'|'D'|'E';
export type Answers = Record<number, Answer>;
export type Dimension = 'attention'|'attraction'|'closeness';
export type Question = { id:number; label:string; text:string; options:[string,string,string,string]; dimension?:Dimension; scores?:[number|null,number|null,number|null,number|null] };
export const questions: Question[] = [
{id:1,label:'聊天之后',text:'聊天结束一会儿后，你通常会怎样？',options:['偶尔想起聊过的话，然后继续做自己的事。','聊完就过去了，之后不太会再想。','做别的事时也会想到TA，期待下次聊天。','我记得的是话题本身，换个人聊也差不多。'],dimension:'attention',scores:[1,0,2,null]},
{id:2,label:'看到一条内容',text:'看到一条TA可能会喜欢的内容时，你通常会？',options:['先存着，谁聊到这个话题都可以发。','想发给TA，看看TA会怎么想。','会想到TA，但不太会特意发过去。','即使没发，也会想象和TA聊这件事。'],dimension:'closeness',scores:[0,2,1,2]},
{id:3,label:'再待一会儿',text:'聚会快结束时，TA说想再坐一会儿。你会？',options:['我本来就想留下，TA在不在都一样。','更想留下，多和TA待一会儿。','看聚会还有没有意思。','会有一点影响，但不会因为TA特意留下。']},
{id:4,label:'说说近况',text:'TA问你最近怎么样，而且愿意慢慢听。你可能会说什么话题？',options:['简单说说最近发生的事。','聊一些平时也会和熟人说的话题。','说一件最近真正影响自己心情的事，希望TA更了解我。','现在不会说太多，但希望以后可以慢慢聊得更深。'],dimension:'closeness',scores:[0,0,2,1]},
{id:5,label:'没有联系的时候',text:'最近两三天没有和TA聊天。闲下来时，你通常会？',options:['偶尔想起TA，但很快就会去做自己的事。','会好奇TA最近在做什么，想找机会聊聊。','不太会特别想到TA。','会想到TA，但又觉得没有合适的话题联系。'],dimension:'attention',scores:[1,2,0,1]},
{id:6,label:'一点小变化',text:'TA做了一个你不太喜欢的新造型。你会？',options:['第一眼不习惯，但还是觉得TA有吸引力。','我本来就没有特别被TA吸引。','这会让我对TA的好感淡一点。','我会注意到变化，但吸引我的主要不是外表。'],dimension:'attraction',scores:[2,0,0,1]},
{id:7,label:'约一个时间',text:'你们都想一起吃饭，只差确定时间。你会？',options:['直接提一个时间，看TA方便不方便。','希望TA先定，我会配合。','想约，但容易犹豫到最后。','不会特意安排，碰巧见到再说。']},
{id:8,label:'不一样的喜好',text:'TA最近反复提起一部你不太会主动看的电影。你会？',options:['想听TA说说，TA为什么这么喜欢。','知道TA喜欢就好，不会特意去了解。','看看简介，下次聊天时多一个话题。','只有电影本身吸引我，才会去看。'],dimension:'closeness',scores:[2,0,1,0]},
{id:9,label:'想告诉谁',text:'遇到一件开心的事，你第一个想到和谁分享？',options:['以后聊到时再告诉TA。','很想立刻告诉TA。','更想发给朋友、群聊或朋友圈。','想告诉TA，但会犹豫要不要主动开口。'],dimension:'attention',scores:[1,2,0,1]},
{id:10,label:'不同的看法',text:'TA和你观点不一样时，你通常会？',options:['想听听TA为什么这么想。','先顺着说，怕气氛变尴尬。','说出自己的想法，也愿意听TA解释。','不太想继续聊，换个话题。']},
{id:11,label:'普通的一次相处',text:'你和TA散步、聊日常，没有发生什么特别的事。结束后，你会觉得？',options:['今天很普通，下次可以换点更有意思的安排。','虽然没做什么，但和TA待在一起就挺开心。','对我来说就是一次普通社交，结束后不会特别留在心里。','没有特别心动，但下次还是愿意单独和TA见面。'],dimension:'attraction',scores:[null,2,0,1]},
{id:12,label:'TA的夸奖',text:'TA夸了你一句。和别人说同样的话比起来，你会觉得？',options:['只要夸得真诚，谁说都差不多。','TA这样说，会让我格外开心。','我更在意TA夸得准不准确。','会开心，但也会猜TA是不是对别人也这样。'],dimension:'attraction',scores:[0,2,null,1]},
{id:13,label:'几天没见',text:'你们几天没见面。你会？',options:['偶尔想起TA，有机会再见就好。','会想见TA，也想念和TA相处的感觉。','日常没什么变化，不会特别想。','想主动联系，但又怕打扰TA。'],dimension:'attention',scores:[1,2,0,1]},
{id:14,label:'TA的重要事情',text:'TA之前说过一件重要的事，现在事情结束了。你会？',options:['自然想到这件事，想知道TA怎么样了。','如果TA主动提起，我会认真听。','可能记得，但不会特意再问。','想问问，但会先想现在问合不合适。'],dimension:'closeness',scores:[2,0,0,1]},
{id:15,label:'TA的随手分享',text:'TA随手发来一张今天拍的照片，没有特别要交代什么。你会？',options:['看过就好，不一定会特意回复。','回一句“挺好看的”或简单接一下话。','会觉得TA愿意分享日常，想多聊几句。','会留意照片里的小细节，好奇TA今天是怎么过的。']},
{id:16,label:'聊得不错以后',text:'一次聊天聊得不错，后来TA没有继续主动。你通常会？',options:['有合适话题就再联系，不急着猜原因。','想继续聊，但会等TA先来找我。','会反复回想聊天内容，担心自己哪里说错了。','这次聊得好就够了，不会特别想延续。']},
{id:17,label:'安静待在一起',text:'你和TA安静地待在一起，气氛并不尴尬。你会觉得？',options:['不说话也舒服，愿意继续待一会儿。','会想找点事做，不太习惯太安静。','可以接受，但不会特别想延长相处。','会因为TA在身边，觉得有点亲近或心动。'],dimension:'attraction',scores:[1,null,0,2]},
{id:18,label:'发现不一样的TA',text:'TA说了一件让你觉得“原来我以前不太了解TA”的事。你会？',options:['会顺着问下去，想知道这件事背后的原因。','先记住这件事，等以后聊天时自然再聊。','听完就算了，不会特别想继续了解。','有点意外，反而会重新想想自己原来对TA的印象。'],dimension:'closeness',scores:[2,1,0,1]},
{id:19,label:'空出来的一小时',text:'你空出一小时，可以自己待着，也可以和TA做件普通的小事。你更想？',options:['和TA一起，即使只是做一件普通的事。','自己待着，最近更需要休息。','两种都可以，没有明显偏好。','要看一起做什么，再决定要不要约TA。']},
{id:20,label:'准备发消息时',text:'准备主动给TA发消息时，你通常会？',options:['有想说的就发，不会想太久。','会等一个看起来合适的时机。','会反复改几遍，怕显得太主动。','很少主动发消息，更习惯等TA来找我。']},
{id:21,label:'下一次见面',text:'想到下次见TA，你最期待的是？',options:['主要期待这次活动本身是什么。','再次感受和TA相处时的心动。','多知道一点TA最近在想什么、经历什么。','没有特别期待，到时候自然相处。'],dimension:'attraction',scores:[0,2,1,0]},
{id:22,label:'TA分享的事',text:'TA跟你分享一件你不太懂、也不太感兴趣，但TA很感兴趣的事情。你会？',options:['祝TA开心，话题通常就到这里。','问问TA：你最喜欢这件事的哪一部分？','即使不太懂，也会认真听TA讲完。','会因为TA这么开心，而想去了解这件事。'],dimension:'closeness',scores:[0,2,1,2]},
{id:23,label:'不太完美的一面',text:'你有不太完美的一面，TA还不知道。你会怎么想？',options:['熟悉以后，自然让TA知道也没关系。','会尽量不让TA看到，怕留下不好的印象。','想让TA了解，但现在还需要一点时间。','没有特别想让TA知道这一面。']},
{id:24,label:'收到邀请',text:'TA约你做一件轻松的小事，时间也合适。你会？',options:['直接答应，再一起商量安排。','会答应，但会提醒自己别表现得太明显。','其实想去，但会因为紧张拖一会儿再回复。','想再考虑一下，我对见面的期待没有那么强。']},
{id:25,label:'留在记忆里的片段',text:'回想最近几次相处，什么最容易被你记住？',options:['TA说话时的神情，或让我心动的小瞬间。','聊过的实用信息或有趣话题。','TA愿意听我说话、理解我的时刻。','没有特别留下来的片段。'],dimension:'attraction',scores:[2,0,1,0]},
{id:26,label:'如果不用再猜',text:'如果你已经知道TA对你有好感，你会更想？',options:['多相处一点，看看真实的彼此合不合得来。','先享受被喜欢的开心，不急着想下一步。','更愿意让TA知道我的好感。','先确认自己是不是真的想靠近TA。']},
{id:27,label:'一段时间没有新互动',text:'最近没有新的聊天或见面，你对TA的感觉会？',options:['还是会想知道TA最近怎么样，也想再见面。','会慢慢淡下来，有新互动时才会再想起。','偶尔想到，但不太有继续了解的冲动。','还是想靠近，只是暂时没有合适机会。'],dimension:'attention',scores:[2,0,0,1]},
{id:28,label:'表达一点在意',text:'你想对TA表达一点在意，例如说“今天和你一起挺开心的”。你会？',options:['觉得是真的，就会自然说出来。','想说，但通常会等TA先表达。','会换成更含蓄的方式，让TA感觉到。','没有特别想表达这种感受。']},
{id:29,label:'关系没有变化',text:'如果接下来一段时间，你们还是像现在这样联系、相处，没有更进一步。你会觉得？',options:['这样就很好，我没有特别想改变。','希望有更多单独相处、慢慢了解彼此的机会。','想更靠近一点，但也会先想清楚自己真正想要什么。','只要聊天舒服就好，我不太在意关系会不会更近。'],dimension:'closeness',scores:[0,2,1,0]},
{id:30,label:'TA提起你',text:'你从别人那里听说，TA曾提起过你。你第一反应会是？',options:['有点意外，但不会想太多。','会好奇TA当时是怎么说我的。','会很开心，也会想知道TA对我到底是什么感觉。','先看提起的是什么事，不会因为是TA就特别在意。']},
];
export const dimensions = [
{key:'attention' as const,label:'持续关注指数',min:4,total:5,color:'pink',description:'看看没有聊天、没有见面的时候，TA会不会还是自然地出现在你的日常里。'},
{key:'attraction' as const,label:'特别吸引指数',min:4,total:6,color:'yellow',description:'看看你在意的是TA这个人，还是有人聊天、有人回应带来的感觉。'},
{key:'closeness' as const,label:'靠近意愿指数',min:5,total:7,color:'blue',description:'看看你愿不愿意多联系、多见面，让TA更多地进入自己的生活。'},
];

type ResultCopy = { title:string; body:string };
const bands = (score:number) => score <= 20 ? 0 : score <= 40 ? 1 : score <= 60 ? 2 : score <= 80 ? 3 : 4;

const totalCopy: ResultCopy[] = [
 {title:'你好像还没有喜欢上TA',body:'你可能觉得TA人还不错，但目前也只是这样。你不会经常想到TA，也没有很想主动靠近。'},
 {title:'有点好感，但还谈不上喜欢',body:'TA偶尔会让你在意一下，不过这种感觉还不算强。你愿意继续接触，但暂时不会把太多心思放在TA身上。'},
 {title:'你确实有点喜欢TA了',body:'你会想起TA，也会在意TA怎么看你。只是这份喜欢还没有完全确定，有时想靠近，有时又觉得可以再看看。'},
 {title:'你是真的挺喜欢TA',body:'TA已经不只是一个聊得来的人。你会自然地想到TA，期待TA的消息，也希望你们能比现在更近一点。'},
 {title:'你已经很喜欢TA了',body:'TA的一句话、一个反应，都可能影响你的心情。你不只想和TA聊天，也希望自己能成为TA生活里特别的人。'},
];

const dimensionCopies: Record<Dimension, ResultCopy[]> = {
 attention:[
  {title:'你平时很少想到TA',body:'没有聊天或见面的时候，TA不太会出现在你的脑海里。即使相处得不错，你也能很快回到自己的生活。'},
  {title:'你偶尔会想起TA',body:'遇到某些话题或场景时，你可能会想到TA，但不会停留太久。TA让你有些好感，还没有真正走进你的日常。'},
  {title:'TA已经开始出现在你的日常里',body:'看到有趣的东西、想起某段聊天时，你会想到TA。不过这种在意有时明显，有时又会淡下去。'},
  {title:'你会很自然地想到TA',body:'即使没有收到TA的消息，你也常常会在某个瞬间想到TA。遇到开心的小事时，你会想和TA说。'},
  {title:'你真的很挂念TA',body:'TA已经占据了你不少注意力。你会留意TA有没有回复，有时只是TA态度上的一点变化，就会让你想很久。'},
 ],
 attraction:[
  {title:'TA对你来说还没有那么特别',body:'你可能觉得TA性格不错，也不排斥继续接触。但换成另一个同样聊得来的人，你的感觉或许也不会相差太多。'},
  {title:'TA身上有些地方让你喜欢',body:'你能说出TA的一些优点，也享受部分相处时刻。不过你目前更喜欢这段互动，还没有特别想走进TA的内心。'},
  {title:'TA对你来说已经有点特别',body:'你会留意TA的反应，也会记住一些与TA有关的细节。只是你还在分辨，自己是真的喜欢TA，还是刚好很享受最近的相处。'},
  {title:'你喜欢的就是TA这个人',body:'你在意的不只是TA有没有回复。你想知道TA在想什么、经历过什么，也想看到TA更真实的一面。'},
  {title:'TA身上有很多地方让你心动',body:'你会被TA具体的性格、表达和小习惯吸引。即使TA没有一直迎合你，你还是很想了解这个人。'},
 ],
 closeness:[
  {title:'你暂时不太想和TA变得更近',body:'你更愿意维持现在的距离。即使有合适的机会，你也未必想增加联系、单独见面，或让TA知道更多关于你的事。'},
  {title:'你愿意接触，但不会主动往前走',body:'如果TA主动找你，你大多愿意回应。但要让你主动制造见面的机会，或者分享更多自己，你可能还缺少一点动力。'},
  {title:'你想靠近，又有些犹豫',body:'你希望和TA多一些相处，也想知道关系有没有可能向前走。可真正行动前，你还是会担心自己太主动。'},
  {title:'你确实想和TA更亲近',body:'你愿意分享更多日常，也期待拥有单独相处的机会。如果TA也给出回应，你会想让关系自然地向前走一点。'},
  {title:'你很想让TA进入自己的生活',body:'你想要的不只是聊天。你希望见面、陪伴、分享彼此的日常，也会想象你们变得更亲近以后是什么样子。'},
 ],
};

export function getTotalCopy(score:number|null):ResultCopy {
 return score === null ? {title:'这次还不能得出结果',body:'有几道用于计算结果的题暂时无法判断。回去补充选择后，再看看自己的心意。'} : totalCopy[bands(score)];
}
export function getDimensionCopy(key:Dimension,score:number|null):ResultCopy {
 return score === null ? {title:'这一项暂时无法判断',body:'这部分可计算的回答还不够，回顾答案后可以再看看。'} : dimensionCopies[key][bands(score)];
}

export function getProfileCopy(parts:{key:Dimension;score:number|null}[]):ResultCopy {
 if(parts.some(part=>part.score===null)) return getTotalCopy(null);
 const values=Object.fromEntries(parts.map(part=>[part.key,part.score as number])) as Record<Dimension,number>;
 const ordered=[...parts].sort((a,b)=>(b.score as number)-(a.score as number));
 const high=ordered[0].key; const low=ordered[2].key; const gap=(ordered[0].score as number)-(ordered[2].score as number);
 if(gap<15){
  const average=(values.attention+values.attraction+values.closeness)/3;
  if(average<=40)return {title:'你对TA有好感，还没有很深',body:'你并不排斥TA，只是这份感觉还没有明显进入你的日常。继续相处，或许比急着定义关系更容易看清答案。'};
  if(average<=60)return {title:'你有些喜欢TA，还没完全想清楚',body:'你会在意TA，也有心动和靠近的念头。不过这些感觉还会随着相处发生变化。'};
  return {title:'你对TA的喜欢，已经很清楚了',body:'你会想起TA，也被这个具体的人吸引，还希望你们能够更加亲近。这份喜欢已经不只是短暂的新鲜感。'};
 }
 if(high==='attention'&&low==='attraction')return {title:'常想起TA，不一定全是心动',body:'你可能已经习惯了TA的陪伴和回应。可以再看看，你舍不得的是TA，还是有人陪你聊天的感觉。'};
 if(high==='attention'&&low==='closeness')return {title:'你很在意TA，却还不敢靠近',body:'你会想TA，也会留意TA的反应。可一想到关系可能发生变化，你就会停下来。'};
 if(high==='attraction'&&low==='attention')return {title:'你会心动，但还没把TA放进日常',body:'TA身上有明确吸引你的地方。不过离开见面或聊天的情境后，你不一定会经常想起TA。'};
 if(high==='attraction'&&low==='closeness')return {title:'你喜欢TA，但还不敢往前走',body:'你知道自己被TA吸引。只是当喜欢需要变成行动时，你会担心太明显，或者破坏现在的关系。'};
 if(high==='closeness'&&low==='attention')return {title:'你愿意发展，还没有深深陷进去',body:'你不排斥和TA更亲近，也愿意给这段关系一个机会。不过TA目前还没有频繁出现在你的日常里。'};
 return {title:'你想让关系更近，但还需要再认识TA',body:'你愿意让关系向前发展。接下来可以看看，你想靠近的是TA这个人，还是刚好想拥有一段亲密关系。'};
}

type ScoredPart = {key:Dimension;score:number|null};
const hasScores = (parts:ScoredPart[]) => parts.every((part) => part.score !== null);
const valueOf = (parts:ScoredPart[], key:Dimension) => parts.find((part) => part.key === key)?.score ?? 0;

export function getWhyCopy(parts:ScoredPart[]):ResultCopy {
 if(!hasScores(parts)) return {title:'喜欢从哪里来',body:'补完用于计算结果的题目后，这里会帮你把三项感受合在一起看。'};
 const attention=valueOf(parts,'attention'), attraction=valueOf(parts,'attraction'), closeness=valueOf(parts,'closeness');
 if(attention<=40&&attraction<=40&&closeness<=40)return {title:'这份感觉还在开始前',body:'你现在对TA更接近“觉得不错”，还没有发展成明确的喜欢。真实相处会慢慢帮你把答案变清楚。'};
 if(attention>=60&&attraction<45&&closeness<55)return {title:'你在意的是相处带来的感觉',body:'TA会出现在你的思绪里，但你还没有很强地被这个人本身吸引。可以再分辨一下：你怀念的是TA，还是有人陪你聊天的感觉。'};
 if(attraction>=60&&attention<50&&closeness<55)return {title:'你被TA的某些地方打动',body:'TA身上有让你记住的地方，但这份吸引还没有完全进入你的日常。先多了解一点，看看这种心动会不会变得稳定。'};
 if(attention>=55&&attraction>=55&&closeness<55)return {title:'你已经在意，只是还没准备好往前走',body:'TA对你来说已经不是普通朋友。你会想起TA，也会被一些地方打动；只是面对真正靠近，你还在犹豫。'};
 if(closeness>=60&&attention<55&&attraction<55)return {title:'你愿意靠近，但感受还需要再确认',body:'你不排斥和TA走近，也愿意投入互动；不过在真的投入之前，先给自己一点时间确认这份喜欢从哪里来。'};
 if(attention>=55&&closeness>=55&&attraction<55)return {title:'你想靠近，但还在找答案',body:'你会在意TA，也愿意多相处；只是还不太说得清，究竟是什么让TA变得特别。多一点具体相处，可能比反复分析更有答案。'};
 return {title:'你在意的是TA，也想让关系有变化',body:'你不只是会想起TA，也清楚自己被什么吸引，并愿意为互动留出时间。接下来更值得看的是，对方会不会同样认真地回应。'};
}

export function getStuckCopy(parts:ScoredPart[]):ResultCopy {
 if(!hasScores(parts)) return {title:'你现在卡在哪里',body:'补完用于计算结果的题目后，这里会帮你找到当前最主要的犹豫。'};
 const attention=valueOf(parts,'attention'), attraction=valueOf(parts,'attraction'), closeness=valueOf(parts,'closeness');
 if(attention<45&&attraction<45&&closeness<45)return {title:'你还在确认自己的感觉',body:'现在不需要急着判断这是不是喜欢。先让更多真实相处，帮你把答案变清楚。'};
 if(attention>=60&&attraction<50)return {title:'你在意，却还没弄清在意什么',body:'TA会影响你的情绪，但你还在分辨：自己是喜欢这个人，还是喜欢被陪伴、被回应的感觉。'};
 if(attraction>=60&&attention<50)return {title:'你被打动，但还没有真正走近',body:'TA身上有让你心动的地方，不过这份感觉还没有变成持续的在意。你可以先看看了解以后会不会更确定。'};
 if(attention>=60&&attraction>=60&&closeness<55)return {title:'你怕一靠近，关系就变了',body:'你已经很在意TA，只是担心主动以后，原本舒服的关系会失去平衡。你不是没有勇气，只是还想等一个更安心的时机。'};
 if(closeness>=60&&attention<55&&attraction<55)return {title:'你想让关系往前，但还没完全看清自己',body:'你愿意和TA靠近，也期待关系有变化；不过先给自己一点时间确认，你想靠近的是TA，还是一段关系本身。'};
 return {title:'你投入得不少，却还没有得到足够答案',body:'你已经把很多心意放进这段关系。接下来困住你的，不是“我喜不喜欢”，而是“这份在意会不会被接住”。'};
}

export function getDirectionCopy(parts:ScoredPart[]):ResultCopy {
 if(!hasScores(parts)) return {title:'下一步方向',body:'先完成这次作答，再看看更适合你的方向。'};
 const attention=valueOf(parts,'attention'), attraction=valueOf(parts,'attraction'), closeness=valueOf(parts,'closeness');
 if(attention<45&&attraction<45&&closeness<45)return {title:'继续了解',body:'先多一点真实相处，不急着给这份感觉下定义。'};
 if(attention>=70&&attraction>=60&&closeness<55)return {title:'试着靠近',body:'可以让互动比现在多走半步，再看对方是否回应。'};
 if(closeness>=65&&attention>=55)return {title:'自然表达',body:'不用突然说得很重，但可以让对方知道你的在意。'};
 if(attention>=75&&closeness>=65&&attraction<55)return {title:'先照顾自己',body:'暂时把注意力收回来，看看这段关系是否也在被对方认真对待。'};
 return {title:'继续观察',body:'先把注意力放回真实互动，看看你在这段关系里是否越来越自在。'};
}

export function getObserveCopy(parts:ScoredPart[]):ResultCopy {
 if(!hasScores(parts)) return {title:'接下来观察什么',body:'完成作答后，这里会给你几个可以留意的互动信号。'};
 const attention=valueOf(parts,'attention'), attraction=valueOf(parts,'attraction'), closeness=valueOf(parts,'closeness');
 if(attention<45&&attraction<45)return {title:'先看TA会不会变得特别',body:'留意你会不会自然想和TA分享小事；没有联系时会不会想起TA；相处后心情会不会和其他人不一样。'};
 if(attention>=60&&attraction<50)return {title:'分清你在意的是人，还是感觉',body:'留意你想念的是TA的表达和特质，还是有人陪伴的状态；换成其他人时，这份感觉会不会也差不多。'};
 if(closeness<55)return {title:'看关系能不能承受一点靠近',body:'当你多说一点自己的事，TA会不会认真接住；当你发出轻微的靠近信号，TA会不会自然延续互动。'};
 return {title:'看回应是不是持续且对等',body:'留意TA会不会主动联系、记得你说过的小事，或愿意为见面和聊天留出具体时间。'};
}

export function getClosingCopy(score:number|null):ResultCopy {
 if(score===null)return {title:'有些感受暂时说不清楚，也没关系。',body:'回看那些让你犹豫的题，也许会更了解自己。'};
 return [
  {title:'暂时没有很喜欢，也是一种清楚的答案。',body:'不需要因为TA条件不错，或者别人觉得你们合适，就逼自己产生更多感觉。'},
  {title:'有好感的时候，不用急着把它叫作喜欢。',body:'再相处一段时间，看看你期待的是TA，还是一段让人开心的互动。'},
  {title:'你可以允许自己一边喜欢，一边犹豫。',body:'继续了解TA，也继续留意自己在这段关系里是否舒服。'},
  {title:'你已经知道自己在意TA了。',body:'接下来不用反复猜自己喜不喜欢，而是看看TA有没有认真回应你的靠近。'},
  {title:'你很喜欢TA，也别忘了看看自己是否被好好对待。',body:'喜欢会让人想靠近，一段舒服的关系也应该让你感到被回应、被尊重。'},
 ][bands(score)];
}
export function scoreQuiz(answers:Answers){
 const parts=dimensions.map(d=>{const valid=questions.filter(q=>q.dimension===d.key).flatMap(q=>{const a=answers[q.id];const value=a&&a!=='E'?q.scores?.['ABCD'.indexOf(a)]:null;return typeof value==='number'?[value]:[]});const raw=valid.length>=d.min?valid.reduce((s,n)=>s+n,0)/(valid.length*2)*100:null;return {...d,valid:valid.length,raw,score:raw===null?null:Math.round(raw)}});
 const complete=questions.every(q=>Boolean(answers[q.id]));
 return {parts,complete,total:complete&&parts.every(p=>p.raw!==null)?Math.round(parts.reduce((sum,p)=>sum+(p.raw??0),0)/3):null};
}
export const tagRules = [
 {label:'表达比较直接',items:[[7,'A'],[24,'A'],[28,'A']]},
 {label:'会先等待回应',items:[[7,'B'],[16,'B'],[28,'B']]},
 {label:'表达时会斟酌',items:[[7,'C'],[24,'B'],[24,'C'],[28,'C']]},
 {label:'会留意对方的评价',items:[[5,'B'],[10,'B'],[16,'C'],[20,'B'],[23,'B']]},
] as const;
export function getTags(answers:Answers){return tagRules.map(t=>({...t,hits:t.items.filter(([id,a])=>answers[id]===a).map(([id])=>id)})).filter(t=>t.hits.length>=2).sort((a,b)=>b.hits.length-a.hits.length);}
