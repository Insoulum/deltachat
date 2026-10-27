class CharacterExpressions {
    constructor() {
        this.susieExpressions = {
            normal: '/assets/sprites/susie/susie_normal.png',
            happy: '/assets/sprites/susie/susie_happy.png',
            evil: '/assets/sprites/susie/susie_evil.png',
            smile: '/assets/sprites/susie/susie_smile.png',
            sweat: '/assets/sprites/susie/susie_sweat.png',
            determined: '/assets/sprites/susie/susie_determined.png',
            skeptical: '/assets/sprites/susie/susie_skeptical.png',
            lipbite: '/assets/sprites/susie/susie_lipbite.png',
            nomouth: '/assets/sprites/susie/susie_nomouth.png',
            lessdetermined: '/assets/sprites/susie/susie_lessdetermined.png',
            lipbitewithwhiteeye: '/assets/sprites/susie/susie_lipbitewithwhiteeye.png',
            sweattalk: '/assets/sprites/susie/susie_sweattalk.png',
            evilnoeye: '/assets/sprites/susie/susie_evilnoeye.png'
        };
        
        this.alphysExpressions = {
            normal: '/assets/sprites/alphys/alphys_normal.png',
            gasp: '/assets/sprites/alphys/alphys_gasp.png',
            nervoussmile: '/assets/sprites/alphys/alphys_nervoussmile.png',
            fear: '/assets/sprites/alphys/alphys_fear.png',
            determined: '/assets/sprites/alphys/alphys_determined.png',
            relieved: '/assets/sprites/alphys/alphys_releived.png',
            erm: '/assets/sprites/alphys/alphys_erm.png',
            ermbutlookingaway: '/assets/sprites/alphys/alphys_ermbuttheyarelookingaway.png',
            nervoussweat: '/assets/sprites/alphys/alphys_okaythisoneislikesweatsmilebutitslikemorenervousiguess.png',
            nervouslookdown: '/assets/sprites/alphys/alphys_nervouslookdown.png',
            sweatsmile: '/assets/sprites/alphys/alphys_sweatsmile.png',
            blush: '/assets/sprites/alphys/alphys_blush.png',
            sweatsmilebutlookingaway: '/assets/sprites/alphys/alphys_theonelikesweatsmilebuttheyarelookingaway.png'
        };
        
        this.torielExpressions = {
            normal: '/assets/sprites/ralsei/ralsei_normal.png',
            lightsmile: '/assets/sprites/ralsei/ralsei_slightsmile.png',
            shocked: '/assets/sprites/ralsei/ralsei_shocked.png',
            smile: '/assets/sprites/ralsei/ralsei_smile.png',
            neutral: '/assets/sprites/ralsei/ralsei_neutral.png',
            veryangry: '/assets/sprites/ralsei/ralsei_veryangry.png',
            darkglasses: '/assets/sprites/ralsei/ralsei_darkglasses.png',
            gasphappy: '/assets/sprites/ralsei/ralsei_gasphappy.png',
            devious: '/assets/sprites/ralsei/ralsei_devious.png',
            fearslightsmile: '/assets/sprites/ralsei/ralsei_fearslightsmile.png',
            noglasses: '/assets/sprites/ralsei/ralsei_noglasses.png',
            explainsadthinglookright: '/assets/sprites/ralsei/ralsei_explainsadthinglookright.png',
            becomingunsad: '/assets/sprites/ralsei/ralsei_becomingunsad.png',
            yell: '/assets/sprites/ralsei/ralsei_yell.png',
            blushlookdown: '/assets/sprites/ralsei/ralsei_blushlookdown.png',
            explainsadthing: '/assets/sprites/ralsei/ralsei_explainsadthing.png',
            determined: '/assets/sprites/ralsei/ralsei_determined.png',
            grumpy: '/assets/sprites/ralsei/ralsei_grumpy.png',
            wink: '/assets/sprites/ralsei/ralsei_wink.png',
            fear: '/assets/sprites/ralsei/ralsei_fear.png',
            frown: '/assets/sprites/ralsei/ralsei_frown.png',
            gasp: '/assets/sprites/ralsei/ralsei_gasp.png',
            frowneyeshalfclosed: '/assets/sprites/ralsei/ralsei_frowneyeshalfclosed.png',
            normallookaway: '/assets/sprites/ralsei/ralsei_normallookaway.png',
            veryhappy: '/assets/sprites/ralsei/ralsei_verihappi.png',
            angry: '/assets/sprites/ralsei/ralsei_angry.png',
            happyeyesclosed: '/assets/sprites/ralsei/ralsei_happyeyesclosed.png',
            blusheyesclosed: '/assets/sprites/ralsei/ralsei_blusheyesclosed.png',
            verysuprised: '/assets/sprites/ralsei/ralsei_verysuprised.png',
            normallookright: '/assets/sprites/ralsei/ralsei_normallookright.png',
            confident: '/assets/sprites/ralsei/ralsei_confident.png',
            suprised: '/assets/sprites/ralsei/ralsei_suprised.png',
            oh: '/assets/sprites/ralsei/ralsei_oh_question_mark.png',
            blush: '/assets/sprites/ralsei/ralsei_blush.png',
            confused: '/assets/sprites/ralsei/ralsei_confused.png',
            blushsuprised: '/assets/sprites/ralsei/ralsei_blushsuprised.png'
        };
        
        this.lancerExpressions = {
            normal: '/assets/sprites/lancer/lancer_happy.png',
            confused: '/assets/sprites/lancer/lancer_confused.png',
            sadlookdown: '/assets/sprites/lancer/lancer_sadlookdown.png',
            mustacheooo: '/assets/sprites/lancer/lancer_mustacheooo.png',
            veryhappy: '/assets/sprites/lancer/lancer_veryhappy.png',
            bigsmile: '/assets/sprites/lancer/lancer_bigsmile.png',
            fancy: '/assets/sprites/lancer/lancer_fancy.png',
            tongue: '/assets/sprites/lancer/lancer_tounge.png',
            ohno: '/assets/sprites/lancer/lancer_ohno.png',
            happy: '/assets/sprites/lancer/lancer_happy.png',
            veryhappyandconfident: '/assets/sprites/lancer/lancer_veryhappyandconfident.png',
            sad: '/assets/sprites/lancer/lancer_sad.png',
            verysad: '/assets/sprites/lancer/lancer_verysad.png',
            mustache: '/assets/sprites/lancer/lancer_mustache.png',
            veryconfused: '/assets/sprites/lancer/lancer_veryconfused.png',
            derp: '/assets/sprites/lancer/lancer_derp.png'
        };
        
        this.rouxlsExpressions = {
            normal: '/assets/sprites/rouxls/rouxls_normal.png',
            scared: '/assets/sprites/rouxls/rouxls_scared.png',
            scaredbutnotlookingbehindhim: '/assets/sprites/rouxls/rouxls_scaredbuthesnotlookingbehindhim.png',
            wink: '/assets/sprites/rouxls/rouxls_wink.png',
            ohgreatheavens: '/assets/sprites/rouxls/rouxls_oh_great_heaveans.png',
            calm: '/assets/sprites/rouxls/rouxls_calm.png',
            mouthopen: '/assets/sprites/rouxls/rouxls_mouthopen.png'
        };
        
        this.berdlyExpressions = {
            normal: '/assets/sprites/berdly/berdly_talk.png',
            think: '/assets/sprites/berdly/berdly_think.png',
            talkthink: '/assets/sprites/berdly/berdly_talkthink.png',
            talkbutyouarestupid: '/assets/sprites/berdly/berdly_talkbutyouarestupid.png',
            talkworried: '/assets/sprites/berdly/berdly_talkworried.png',
            mischivoushappy: '/assets/sprites/berdly/berdly_mischivoushappy.png',
            joyeyesclosed: '/assets/sprites/berdly/berdly_joyeyesclosed.png',
            heartbroken: '/assets/sprites/berdly/berdly_heartbroken.png',
            charismamode: '/assets/sprites/berdly/berdly_charismamode.png',
            oh: '/assets/sprites/berdly/berdly_oh.png',
            joy: '/assets/sprites/berdly/berdly_joy.png',
            moreheartbroken: '/assets/sprites/berdly/berdly_moreheartbroken.png',
            talksuggestive: '/assets/sprites/berdly/berdly_talksuggestive.png',
            determination: '/assets/sprites/berdly/berdly_determination.png',
            mansplain: '/assets/sprites/berdly/berdly_mansplain.png',
            talk: '/assets/sprites/berdly/berdly_talk.png',
            butyouarealidiotnow: '/assets/sprites/berdly/berdly_butyouarealidiotnow.png',
            kiss: '/assets/sprites/berdly/berdly_kiss.png',
            lessdetermination: '/assets/sprites/berdly/berdly_lessdetermination.png',
            nodetermination: '/assets/sprites/berdly/berdly_nodetermination.png',
            seriouslystopremovingthedetermination: '/assets/sprites/berdly/berdly_seriouslystopremovingthedetermination.png',
            evenlessdetermination: '/assets/sprites/berdly/berdly_evenlessdetermination.png',
            toomuchlessdetermination: '/assets/sprites/berdly/berdly_toomuchlessdetermination.png',
            surprisednervous: '/assets/sprites/berdly/berdly_surprisednervous.png'
        };
        
        this.berdlyDarkExpressions = {
            normal: '/assets/sprites/berdly/berdly_talk_dark.png',
            think: '/assets/sprites/berdly/berdly_think_dark.png',
            talkthink: '/assets/sprites/berdly/berdly_talkthink_dark.png',
            talkbutyouarestupid: '/assets/sprites/berdly/berdly_talkbutyoustupid_dark.png',
            talkworried: '/assets/sprites/berdly/berdly_talkworried_dark.png',
            mischivoushappy: '/assets/sprites/berdly/berdly_mischivoushappy_dark.png',
            joyeyesclosed: '/assets/sprites/berdly/berdly_joyeyesclosed_dark.png',
            heartbroken: '/assets/sprites/berdly/berdly_heartbroken_dark.png',
            charismamode: '/assets/sprites/berdly/berdly_charismamode_dark.png',
            oh: '/assets/sprites/berdly/berdly_oh_dark.png',
            joy: '/assets/sprites/berdly/berdly_joy_dark.png',
            moreheartbroken: '/assets/sprites/berdly/berdly_moreheartbroken_dark.png',
            talksuggestive: '/assets/sprites/berdly/berdly_talksuggestive_dark.png',
            determination: '/assets/sprites/berdly/berdly_determination_dark.png',
            mansplain: '/assets/sprites/berdly/berdly_mansplain_dark.png',
            talk: '/assets/sprites/berdly/berdly_talk_dark.png',
            butyouarealidiotnow: '/assets/sprites/berdly/berdly_butyouarealidiotnow_dark.png',
            kiss: '/assets/sprites/berdly/berdly_kiss_dark.png',
            lessdetermination: '/assets/sprites/berdly/berdly_lessdetermination_dark.png',
            nodetermination: '/assets/sprites/berdly/berdly_nodetermination_dark.png',
            seriouslystopremovingthedetermination: '/assets/sprites/berdly/berdly_seriouslystopremovingthedetermination_dark.png',
            evenlessdetermination: '/assets/sprites/berdly/berdly_evenlessdetermination_dark.png',
            toomuchlessdetermination: '/assets/sprites/berdly/berdly_toomuchlessdetermination_dark.png',
            surprisednervous: '/assets/sprites/berdly/berdly_surprisednervous_dark.png'
        };
        
        this.tobyExpressions = {
            normal: '/assets/sprites/toby/tobyfox.png'
        };
        
        this.spamtonExpressions = {
            normal: '/assets/sprites/spamton/spamton.png'
        };
        
        this.queenExpressions = {
            normal: '/assets/sprites/queen/queen_oh.png',
            oh: '/assets/sprites/queen/queen_oh.png',
            lookleftoh: '/assets/sprites/queen/queen_lookleftoh.png',
            veryconfused: '/assets/sprites/queen/queen_veryconfused.png',
            likebrowtf: '/assets/sprites/queen/queen_likebrowtf.png',
            happy: '/assets/sprites/queen/queen_happy.png',
            hate: '/assets/sprites/queen/queen_hate.png',
            smile: '/assets/sprites/queen/queen_smile.png',
            haha: '/assets/sprites/queen/queen_haha.png',
            true: '/assets/sprites/queen/queen_true.png',
            sticktongueout: '/assets/sprites/queen/queen_sticktoungeout.png',
            erm: '/assets/sprites/queen/queen_erm.png',
            confident: '/assets/sprites/queen/queen_confident.png',
            nice: '/assets/sprites/queen/queen_nice.png',
            sip: '/assets/sprites/queen/queen_sip.png',
            anger: '/assets/sprites/queen/queen_anger.png',
            hmm: '/assets/sprites/queen/queen_hmm.png',
            lmao: '/assets/sprites/queen/queen_lmao.png',
            nanananabooboo: '/assets/sprites/queen/queen_nanananabooboo.png',
            lookright: '/assets/sprites/queen/queen_lookright.png',
            lookleftsmile: '/assets/sprites/queen/queen_lookleftsmile.png',
            idk: '/assets/sprites/queen/queen_idk.png',
            hahaha: '/assets/sprites/queen/queen_hahaha.png',
            bigevilplan: '/assets/sprites/queen/queen_bigevilplan.png',
            lying: '/assets/sprites/queen/queen_lying.png',
            bigerm: '/assets/sprites/queen/queen_bigerm.png',
            worried: '/assets/sprites/queen/queen_worried.png',
            yell: '/assets/sprites/queen/queen_yell.png',
            ohgreatheavens: '/assets/sprites/queen/queen_oh_great_heavans_it_appears_i_have_fallen_to_the_shit_squad.png'
        };
        
        this.tennaExpressions = {
            normal: '/assets/sprites/tenna/tenna.png',
            showman: '/assets/sprites/tenna/tenna.png',
            excited: '/assets/sprites/tenna/tenna.png',
            confident: '/assets/sprites/tenna/tenna.png',
            dramatic: '/assets/sprites/tenna/tenna.png',
            smug: '/assets/sprites/tenna/tenna.png',
            angry: '/assets/sprites/tenna/tenna.png',
            surprised: '/assets/sprites/tenna/tenna.png',
            happy: '/assets/sprites/tenna/tenna.png',
            evil: '/assets/sprites/tenna/tenna.png',
            tvtime: '/assets/sprites/tenna/tenna.png',
            presenting: '/assets/sprites/tenna/tenna.png',
            commanding: '/assets/sprites/tenna/tenna.png',
            broadcasting: '/assets/sprites/tenna/tenna.png',
            groovy: '/assets/sprites/tenna/tenna.png',
            king: '/assets/sprites/tenna/tenna.png',
            gameshow: '/assets/sprites/tenna/tenna.png'
        };
        
        this.nubertExpressions = {
            normal: '/assets/sprites/nubert/nubert.png',
            happy: '/assets/sprites/nubert/nubert.png',
            smile: '/assets/sprites/nubert/nubert.png'
        };
        
        this.rambExpressions = {
            normal: '/assets/sprites/ramb/ramb_normal.png',
            scared: '/assets/sprites/ramb/ramb_scared.png',
            think: '/assets/sprites/ramb/ramb_think.png',
            wink: '/assets/sprites/ramb/ramb_wink.png',
            wink2: '/assets/sprites/ramb/ramb_wink_2.png',
            drunk: '/assets/sprites/ramb/ramb_drunk.png'
        };

        // PLUEY — the quiet male counterpart to Pink. Expressions map to the
        // sprite files in the workspace: stills are single images, animations
        // are frame lists ("f1..fN"). Frames with an "f" are animated; those
        // without are stills. 'pretty' is the one that does NOT loop cleanly
        // (it snaps back like Pink's tail).
        this.plueyExpressions = {
            blushyarnball: ['/assets/sprites/pluey/pluey_blushyarnball.png'],
            dance: ['/assets/sprites/pluey/pluey_dance_f_1.png', '/assets/sprites/pluey/pluey_dance_f_2.png', '/assets/sprites/pluey/pluey_dance_f_3.png', '/assets/sprites/pluey/pluey_dance_f_4.png', '/assets/sprites/pluey/pluey_dance_f_5.png', '/assets/sprites/pluey/pluey_dance_f_6.png', '/assets/sprites/pluey/pluey_dance_f_7.png', '/assets/sprites/pluey/pluey_dance_f_8.png'],
            frowndance: ['/assets/sprites/pluey/pluey_frowndance_f_1.png', '/assets/sprites/pluey/pluey_frowndance_f_2.png', '/assets/sprites/pluey/pluey_frowndance_f_3.png', '/assets/sprites/pluey/pluey_frowndance_f_4.png', '/assets/sprites/pluey/pluey_frowndance_f_5.png', '/assets/sprites/pluey/pluey_frowndance_f_6.png', '/assets/sprites/pluey/pluey_frowndance_f_7.png', '/assets/sprites/pluey/pluey_frowndance_f_8.png'],
            exhausted: ['/assets/sprites/pluey/pluey_exhausted.png'],
            pretty: ['/assets/sprites/pluey/pluey_pretty_f_1.png', '/assets/sprites/pluey/pluey_pretty_f_2.png', '/assets/sprites/pluey/pluey_pretty_f_3.png', '/assets/sprites/pluey/pluey_pretty_f_4.png', '/assets/sprites/pluey/pluey_pretty_f_5.png'],
            yarnball: ['/assets/sprites/pluey/pluey_yarnball_f_1.png', '/assets/sprites/pluey/pluey_yarnball_f_2.png', '/assets/sprites/pluey/pluey_yarnball_f_3.png', '/assets/sprites/pluey/pluey_yarnball_f_4.png', '/assets/sprites/pluey/pluey_yarnball_f_5.png']
        };

        // PINK — a Lightner ghost in a Darkly magical girl's cat body.
        // Talking variants are the same pose with the mouth open; the base sprite
        // is mouth closed. Every expression below should have a talking partner.
        this.pinkExpressions = {
            normal: '/assets/sprites/pink/pink_normal.png',
            smile: '/assets/sprites/pink/pink_smile.png',
            wink: '/assets/sprites/pink/pink_wink.png',
            nya: '/assets/sprites/pink/pink_nya.png',
            nyawink: '/assets/sprites/pink/pink_nyawink.png',
            angryblush: '/assets/sprites/pink/pink_angryblush.png',
            cry: '/assets/sprites/pink/pink_cry.png',
            happycry: '/assets/sprites/pink/pink_happycry.png',
            eyesclosed: '/assets/sprites/pink/pink_eyesclosed.png',
            eyeshalfclosed: '/assets/sprites/pink/pink_eyeshalfclosed.png',
            gasp: '/assets/sprites/pink/pink_gasp.png',
            gasphorror: '/assets/sprites/pink/pink_gasphorror.png',
            overjoyed: '/assets/sprites/pink/pink_overjoyed.png',
            sad: '/assets/sprites/pink/pink_sad.png',
            sadblush: '/assets/sprites/pink/pink_sadblush.png',
            tearfulhappy: '/assets/sprites/pink/pink_tearfulhappy.png',
            exploded: '/assets/sprites/pink/pink_exploded.png',
            shock: '/assets/sprites/pink/pink_shock.png',
            clutchhead: '/assets/sprites/pink/pink_clutchhead.png'
        };

        // Pink's talking variants. If an expression lacks one, fall back to base.
        this.pinkTalkingExpressions = {
            normal: '/assets/sprites/pink/pink_normal_talking.png',
            smile: '/assets/sprites/pink/pink_smile_talking.png',
            wink: '/assets/sprites/pink/pink_wink_talking.png',
            nya: '/assets/sprites/pink/pink_nya_talking.png',
            nyawink: '/assets/sprites/pink/pink_nyawink_talking.png',
            angryblush: '/assets/sprites/pink/pink_angryblush_talking.png',
            cry: '/assets/sprites/pink/pink_cry_talking.png',
            happycry: '/assets/sprites/pink/pink_happycry_talking.png',
            eyesclosed: '/assets/sprites/pink/pink_eyesclosed_talking.png',
            eyeshalfclosed: '/assets/sprites/pink/pink_eyeshalfclosed_talking.png',
            gasp: '/assets/sprites/pink/pink_gasp_talking.png',
            gasphorror: '/assets/sprites/pink/pink_gasphorror_talking.png',
            overjoyed: '/assets/sprites/pink/pink_overjoyed_talking.png',
            sad: '/assets/sprites/pink/pink_sad_talking.png',
            sadblush: '/assets/sprites/pink/pink_sadblush_talking.png',
            tearfulhappy: '/assets/sprites/pink/pink_tearfulhappy_talking.png'
        };

        // Tail animation frames (pinktailf1..f6).
        this.pinkTailFrames = [
            '/assets/sprites/pink/pink_tail_f_1.png', '/assets/sprites/pink/pink_tail_f_2.png', '/assets/sprites/pink/pink_tail_f_3.png',
            '/assets/sprites/pink/pink_tail_f_4.png', '/assets/sprites/pink/pink_tail_f_5.png', '/assets/sprites/pink/pink_tail_f_6.png'
        ];
        
        // Flowery — the flower who shows up now and then. Nine sprites: a
        // sunnily polite default plus the creeping/smirking/smiling range.
        this.floweryExpressions = {
            normal: '/assets/sprites/flowery/flowery_normal.png',
            notsmiling: '/assets/sprites/flowery/flowery_notsmiling.png',
            smolsmile: '/assets/sprites/flowery/flowery_smolsmile.png',
            nervous: '/assets/sprites/flowery/flowery_nervous.png',
            question: '/assets/sprites/flowery/flowery_question.png',
            worried: '/assets/sprites/flowery/flowery_worried.png',
            pity: '/assets/sprites/flowery/flowery_pity.png',
            determined: '/assets/sprites/flowery/flowery_determined.png',
            verynotsmiling: '/assets/sprites/flowery/flowery_verynotsmiling.png'
        };

        this.noelleExpressions = {
            normal: '/assets/sprites/noelle/noelle_00.png',
            happy: '/assets/sprites/noelle/noelle_08.png',
            sad: '/assets/sprites/noelle/noelle_09.png',
            surprised: '/assets/sprites/noelle/noelle_27.png',
            nervous: '/assets/sprites/noelle/noelle_24.png',
            smile: '/assets/sprites/noelle/noelle_04.png',
            worried: '/assets/sprites/noelle/noelle_46.png',
            confused: '/assets/sprites/noelle/noelle_23.png',
            determined: '/assets/sprites/noelle/noelle_43.png',
            blush: '/assets/sprites/noelle/noelle_22.png',
            scared: '/assets/sprites/noelle/noelle_26.png',
            angry: '/assets/sprites/noelle/noelle_53.png',
            embarrassed: '/assets/sprites/noelle/noelle_58.png',
            curious: '/assets/sprites/noelle/noelle_56.png',
            cheerful: '/assets/sprites/noelle/noelle_14.png',
            concerned: '/assets/sprites/noelle/noelle_45.png',
            shy: '/assets/sprites/noelle/noelle_47.png',
            thoughtful: '/assets/sprites/noelle/noelle_49.png',
            shocked: '/assets/sprites/noelle/noelle_35.png',
            melancholy: '/assets/sprites/noelle/noelle_50.png',
            mischievous: '/assets/sprites/noelle/noelle_20.png',
            content: '/assets/sprites/noelle/noelle_51.png',
            fearful: '/assets/sprites/noelle/noelle_24.png',
            upset: '/assets/sprites/noelle/noelle_58.png',
            anxious: '/assets/sprites/noelle/noelle_46.png',
            startled: '/assets/sprites/noelle/noelle_27.png',
            worried_surprised: '/assets/sprites/noelle/noelle_26.png',
            gentle: '/assets/sprites/noelle/noelle_52.png',
            contemplative: '/assets/sprites/noelle/noelle_49.png',
            sleepy: '/assets/sprites/noelle/noelle_07.png',
            puzzled: '/assets/sprites/noelle/noelle_23.png',
            hopeful: '/assets/sprites/noelle/noelle_56.png',
            excited: '/assets/sprites/noelle/noelle_14.png',
            uncomfortable: '/assets/sprites/noelle/noelle_24.png',
            pleased: '/assets/sprites/noelle/noelle_08.png',
            uncertain: '/assets/sprites/noelle/noelle_23.png',
            wistful: '/assets/sprites/noelle/noelle_50.png',
            alert: '/assets/sprites/noelle/noelle_35.png',
            friendly: '/assets/sprites/noelle/noelle_04.png',
            distressed: '/assets/sprites/noelle/noelle_58.png',
            calm: '/assets/sprites/noelle/noelle_00.png',
            playful: '/assets/sprites/noelle/noelle_20.png',
            tender: '/assets/sprites/noelle/noelle_52.png',
            stern: '/assets/sprites/noelle/noelle_53.png',
            dreamy: '/assets/sprites/noelle/noelle_07.png',
            cautious: '/assets/sprites/noelle/noelle_46.png',
            timid: '/assets/sprites/noelle/noelle_47.png',
            serene: '/assets/sprites/noelle/noelle_51.png',
            pensive: '/assets/sprites/noelle/noelle_49.png',
            sly: '/assets/sprites/noelle/noelle_20.png',
            disappointed: '/assets/sprites/noelle/noelle_50.png',
            peaceful: '/assets/sprites/noelle/noelle_51.png',
            sweet: '/assets/sprites/noelle/noelle_52.png',
            fierce: '/assets/sprites/noelle/noelle_53.png',
            joyful: '/assets/sprites/noelle/noelle_14.png',
            delighted: '/assets/sprites/noelle/noelle_08.png',
            optimistic: '/assets/sprites/noelle/noelle_56.png',
            graceful: '/assets/sprites/noelle/noelle_52.png',
            melancholic: '/assets/sprites/noelle/noelle_50.png',
            serious: '/assets/sprites/noelle/noelle_43.png',
            grumpy: '/assets/sprites/noelle/noelle_61.png',
            irritated: '/assets/sprites/noelle/noelle_62.png'
        };
    }
}