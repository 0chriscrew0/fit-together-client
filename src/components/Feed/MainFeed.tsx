import * as React from "react";

import Post from "./Post";

const MainFeed: React.FunctionComponent = () => (
  <div className="main-feed">
    <div className="main-feed-header">
      <h5>Social Feed</h5>
      <button className="btn btn-sm btn-primary">
        New Post
        <i className="far fa-comment-alt pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>
    <Post
      username="Brad"
      likes={5}
      comments={0}
      content="Derek griffiths boxing champion mark lawrenson robot moustache Refined gentlemen, what a bounder nefarious derek griffiths mark lawrenson robot moustache robot moustache jimi hendrix Refined gentlemen boxing champion, jimi hendrix smashing good fun graeme souness what a bounder charming villain lip warmer devilish cad robot moustache mark lawrenson bogie basket nefarious boxing champion hair trimmer derek griffiths Refined gentlemen robot moustache. Got milk funny walk el snort boogie nights ron jeremy bruce forsyth?"
    />
    <Post
      username="Chris"
      likes={1304}
      comments={572}
      content="Elit east european mouthbrow consectetur leader of men che guevara, bad guy trimmed consectetur elit leader of men east european che guevara mouthbrow comb rock n roll star?"
    />
    <Post
      username="Chad"
      likes={23}
      comments={5}
      content="Glorious facial hair Daniel plainview robot moustache devilish cad facial accessory blacksmith, devilish cad blacksmith facial accessory charlie chaplin Daniel plainview sportacus movember andrew weatherall glorious facial hair circus strongman robot moustache?"
    />
    <Post
      username="Brad"
      likes={0}
      comments={0}
      content="Lip warmer holiday waiter musketeer old man in pub rugged hairy kiss.. East european rugged et nigel mansell hello, we’re cockneys luxurious rugged et 118 118."
    />
    <Post
      username="Chris"
      likes={833}
      comments={409}
      content="Et sodales cum Fallen eyebrow groucho marx, bad guy timothy dalton Fallen eyebrow sterling nuremberg rally um yesbaby facial accessory groucho marx ian rush et sodales cum tache? Hairy kiss. old west sheriff brush casual style ron burgundy."
    />
    <Post
      username="Chad"
      likes={49}
      comments={7}
      content="Sergeant major devilish cad albert einstein vincent price pit fighter, rock n roll star barber shop quartet devilish cad vincent price albert einstein Sergeant major cesar romero blue oyster bar pit fighter, brush pit fighter Sergeant major casual style hold steady keyboardist cesar romero vincent price barber shop quartet devilish cad omar sharif blue oyster bar albert einstein rock n roll star man of the year 1986."
    />
    <Post
      username="Brad"
      likes={12}
      comments={5}
      content="Professor plum freestyle ding-dong, professor plum mouth coiffure ding-dong timothy dalton freestyle charlie chaplin bruce forsyth Milkshake issues give him what-for 118 118, mouth coiffure hold steady keyboardist bruce forsyth freestyle challenge you to a duel ding-dong professor plum face broom country baron charlie chaplin mustachioed Milkshake issues arcu timothy dalton 118 118 give him what-for? Boxing champion wario leader of men wario joseph stalin, east european boxing champion wario clone zone shopper wario leader of men joseph stalin casual style, wario casual style mustachioed derek griffiths east european joseph stalin alpha trion kris kristofferson. 118 118 leader of men wario clone zone shopper boxing champion."
    />
    <Post
      username="Chad"
      likes={1}
      comments={0}
      content="Mouthbrow will you do the fandango kaiser bill freestyle?"
    />
    <Post
      username="Chris"
      likes={5021}
      comments={73}
      content="Gunslinger zap rowsdower terry thomas marquess of queensbury et socially mobile hungarian. Terry thomas lando calrissian helllloooo horseshoe, mr frothy-top challenge you to a duel by jingo. face broom frontiersman lando calrissian horseshoe mustachioed et terry thomas helllloooo comb, terry thomas by jingo."
    />
    <Post
      username="Chris"
      likes={674}
      comments={13}
      content="French café patron admiral circus strongman super mario terry thomas soup strainer, middle eastern despot soup strainer circus strongman villain French café patron super mario terry thomas admiral lady magnets, lady magnets villain villain andrew weatherall French café patron middle eastern despot soup strainer Nostrilis tickler id barber shop quartet admiral dis brush robert winston terry thomas super mario circus strongman."
    />
    <Post
      username="Chad"
      likes={56}
      comments={1}
      content="Milkshake issues lemmy mr frothy-top face broom challenge you to a duel Droopy comb saddam hussein lando calrissian helllloooo et horseshoe frontiersman mustachioed."
    />
  </div>
);

export default MainFeed;
