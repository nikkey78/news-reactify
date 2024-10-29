// import axios from 'axios';

// const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
   //    try {
   //       const response = await axios.get(`${BASE_URL}latest-news`, {
   //          params: { apiKey: API_KEY },
   //       });

   //       return response.data;
   //    } catch (err) {
   //       console.log(err);
   //    }

   await fakeNetwork();
   return new Promise(resolve =>
      resolve({
         status: 'ok',
         news: [
            {
               id: '18d6c3af-0a6e-4975-88eb-fbe45d000113',
               title: 'Passan: Yankees need to wake up before this dream World Series ends as a New York nightmare',
               description:
                  "After stumbling to a 0-2 Fall Classic deficit, the Bombers' margin for error has disappeared.",
               url: 'https://www.espn.com/mlb/story/_/id/42024455/2024-world-series-yankees-dodgers-save-season-new-york-struggles',
               author: 'Jeff Passan',
               image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/10/1024/512/loomis.jpg',
               language: 'en',
               category: [],
               published: '2024-10-27 18:06:39 +0000',
            },
            {
               id: 'ebe0a0ab-dcc3-4f87-ac4a-d4591ea7d11a',
               title: 'Man fatally shot in downtown San Jose — city&#39;s 26th homicide of the year',
               description:
                  'The victim died at the scene of the shooting on South Second Street near East San Fernando Street....',
               url: 'https://www.sfchronicle.com/crime/article/san-jose-homicide-19866711.php',
               author: '',
               image: 'None',
               language: 'en',
               category: ['regional', 'san-jose', 'california'],
               published: '2024-10-27 17:39:27 +0000',
            },
            {
               id: 'ea0aec58-5e7b-43ec-ae49-c804c8fe128c',
               title: 'Adele in Tears After Spotting Celine Dion at Las Vegas Residency',
               description:
                  'Adele had a tearful interlude at her Vegas residency Saturday night ... when she spotted a fan in the audience ... and that would be Celine Dion.',
               url: 'https://www.tmz.com/2024/10/27/adele-in-tears-seeing-celine-dion-at-vegas-residency/',
               author: 'TMZ Staff',
               image: 'https://imagez.tmz.com/image/64/16by9/2024/10/27/6451964c5b514a4b8633bccef0cf405d_xl.jpg',
               language: 'en',
               category: ['entertainment'],
               published: '2024-10-27 17:38:44 +0000',
            },
            {
               id: '40dad9cf-27e7-4148-b0cb-1cb7bc388a1c',
               title: "Taylor Swift Brings Out Sabrina Carpenter for New Orleans 'Eras' Tour",
               description:
                  '... Come Sing with Me in New Orleans\n\nPlease Please Please Sabrina!!!\n\nPlay video content\n\nTaylor Swift took over New Orleans Saturday night, with an assist from Sabrina Carpenter.\n\nPlay video content...',
               url: 'https://www.tmz.com/2024/10/27/taylor-swift-sabrina-carpenter-sing-espresso-mash-up-new-orleans-eras-tour/',
               author: 'TMZ Staff',
               image: 'https://imagez.tmz.com/image/c7/16by9/2024/10/27/c7a9bd5ab19c4629aa7881340bbd5b4b_xl.jpg',
               language: 'en',
               category: ['entertainment'],
               published: '2024-10-27 17:38:44 +0000',
            },
            {
               id: 'fbb37327-0018-4ab4-8d9b-3afa52c84cdc',
               title: "Georgia's crucial vote was marred by intimidation, European monitors say",
               description:
                  "Georgia's crucial vote was marred by intimidation, European monitors say\n\ntoggle caption Shakh Aivazov/AP/AP\n\nTBILISI, Georgia — European observers said Sunday that Georgia's parliamentary election to...",
               url: 'https://www.npr.org/2024/10/27/g-s1-30210/georgias-crucial-vote-was-marred-by-intimidation-european-monitors-say',
               author: 'The Associated Press',
               image: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3913x2201+0+204/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc2%2F6c%2Fc52ac38c4fb3a33c2f5cae7e344d%2Fap24301313427153.jpg',
               language: 'en',
               category: ['world'],
               published: '2024-10-27 17:34:33 +0000',
            },
            {
               id: 'aac7bcfc-43ef-44ab-ab85-0970812d51d6',
               title: 'Palm Beach County teen transforms home into haunted house to benefit Forgotten Soldiers Outreach',
               description:
                  "PALM BEACH COUNTY, Fla. — A Palm Beach County teen is scaring people for a good cause. That's how Jonah Wides spent his Friday and Saturday nights.\n\n\"We're just doing a haunted house to raise money fo...",
               url: 'https://www.wptv.com/news/palm-beach-county/region-c-palm-beach-county/palm-beach-county-teen-transforms-home-into-haunted-house-to-benefit-forgotten-soldiers-outreach',
               author: 'Cassandra Garcia',
               image: 'https://ewscripps.brightspotcdn.com/dims4/default/a0cfc1f/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fause%2Fslices%2F081%2F2fbf8a5e953e4a01960f2f5161cc4953%2F08100caaef5d495c8c4d30f38f17e24f%2Fposter_0ef8fb699807429aac08cb555dfa716b.jpeg',
               language: 'en',
               category: ['regional', 'west-palm-beach', 'florida'],
               published: '2024-10-27 17:31:51 +0000',
            },
            {
               id: '999c0da2-89ff-4d6b-bd40-d20ed99c0aad',
               title: 'Seaport Therapeutics Secures $225M for New Kind of Depression Drug',
               description:
                  'Seaport Therapeutics’ Series B financing was one of the largest rounds of funding in our recap of biotech financing news, which spans startups developing drugs for neurological diseases, cancer, immunology, and more.',
               url: 'https://medcitynews.com/2024/10/seaport-therapeutics-secures-225m-for-new-kind-of-depression-drug/',
               author: 'Frank Vinluan',
               image: 'https://medcitynews.com/wp-content/uploads/sites/7/2022/02/51353415573_0c74ab1fb2_c.jpg',
               language: 'en',
               category: ['business'],
               published: '2024-10-27 17:28:58 +0000',
            },
            {
               id: '573d2fbc-dd73-41af-86df-e81aaefa8db5',
               title: "Selena Gomez and Benny Blanco Channel 'Alice In Wonderland' for Halloween",
               description:
                  'Selena Gomez and Benny Blanco broke out their Halloween costumes early this year — and the couple looks like something straight out of "Alice in Wonderland."',
               url: 'https://www.tmz.com/2024/10/27/selena-gomez-benny-blanco-wear-alice-in-wonderland-mad-hatter-costumes/',
               author: 'TMZ Staff',
               image: 'https://imagez.tmz.com/image/21/16by9/2024/10/27/212f5b9cfb334167b6965031e2897576_xl.jpg',
               language: 'en',
               category: ['entertainment', 'celebrity'],
               published: '2024-10-27 17:28:34 +0000',
            },
            {
               id: '53a9008a-81c3-4eec-b3b1-cf30fba759cd',
               title: 'Singer apologizes for dropping expletives after asking for re-do during live national anthem performance',
               description:
                  'Singer Loomis is apologizing after dropping multiple expletives during a performance of the national anthem last week at the Free and Equal Elections Foundation Debate featuring third-party presidential candidates."When I realized I messed up, I panicked and cursed," she said in an emailed statement...',
               url: 'https://www.foxnews.com/entertainment/singer-apologizes-dropping-expletives-after-asking-re-do-during-live-national-anthem-performance',
               author: 'Fox News',
               image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/10/1024/512/loomis.jpg?ve=1&tl=1',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:27:36 +0000',
            },
            {
               id: '7c8cd4e0-63f9-430e-b913-0c7aa541d272',
               title: 'Chiefs vs. Raiders: Week 8 Preview, Score Predictions',
               description:
                  "How will the Chiefs fare when they travel to face the Raiders in Week 8? Let's predict KC's seventh outing of the season.",
               url: 'https://www.si.com/nfl/chiefs/game-day/kansas-city-chiefs-vs-las-vegas-raiders-week-8-preview-score-predictions',
               author: 'Jordan Foote',
               image: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_3689,h_2075,x_0,y_75/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/arrowhead_report/01jb79dahep7fx6w2tfh.jpg',
               language: 'en',
               category: ['regional', 'las-vegas'],
               published: '2024-10-27 17:26:37 +0000',
            },
            {
               id: 'f57a934e-793c-4cb8-8603-e451c998112c',
               title: 'Fatal shooting results in San Jose&#39;s 26th homicide of the year - KRON4',
               description:
                  "(KRON) – The San Jose Police Department is investigating the city's 26th homicide of the year. At 2:38 a.m. on Sunday, San Jose patrol officers ......",
               url: 'https://www.kron4.com/news/bay-area/fatal-shooting-results-in-san-joses-26-homicide-of-the-year/',
               author: '',
               image: 'None',
               language: 'en',
               category: ['regional', 'san-jose', 'california'],
               published: '2024-10-27 17:24:41 +0000',
            },
            {
               id: '12799027-a283-4fe9-8bce-2dd4360223ae',
               title: "Men's Water Polo Falls to San Jose State in Overtime - Harvard University",
               description:
                  "SAN JOSE, Calif – Men's water polo fell to No. 12 San Jose State in overtime on Sunday morning to close its California trip.  James Rozolis-Hill and Owen Hale both",
               url: 'https://gocrimson.com/news/2024/10/27/mens-water-polo-falls-to-san-jose-state-in-overtime.aspx',
               author: 'Harvard University',
               image: 'https://gocrimson.com/images/2024/10/27/DSC_8241.jpg?preset=large.socialmediaimage',
               language: 'en',
               category: ['regional', 'san-jose', 'california'],
               published: '2024-10-27 17:23:49 +0000',
            },
            {
               id: 'dfd9f36e-9565-4876-8f6b-c1a4efb738ec',
               title: 'Highcross reveals redevelopment plans | TheBusinessDesk.com',
               description: 'Four entrances to mall set to be transformed',
               url: 'https://www.thebusinessdesk.com/eastmidlands/news/2091302-highcross-reveals-redevelopment-plans',
               author: 'Sam Metcalf',
               image: 'https://www.thebusinessdesk.com/_files/images/oct_24/Highcross_HighStreet_Entrance_Plan_1.jpg',
               language: 'en',
               category: ['industry', 'textiles'],
               published: '2024-10-27 17:23:17 +0000',
            },
            {
               id: 'd79f09d8-050d-437c-9d14-33b99854add8',
               title: 'Israeli Strike On the City of Sidon Kills 8 People, Lebanon Health Ministry Says',
               description:
                  'The site of an Israeli airstrike that targeted the Haret Saida area, next to the southern Lebanese city of Sidon on Sunday....',
               url: 'https://www.nytimes.com/2024/10/27/world/middleeast/israeli-strike-sidon-lebanon.html',
               author: 'Matthew Mpoke Bigg',
               image: 'None',
               language: 'en',
               category: ['world'],
               published: '2024-10-27 17:23:06 +0000',
            },
            {
               id: '219fedd0-adec-445b-9674-6f053b165c57',
               title: 'Battleground state officials say foreign enemies using misinformation to ‘undermine’ democratic process',
               description:
                  'Two state officials in battleground states Arizona and Pennsylvania on Sunday warned American voters that foreign adversaries are trying to sow distrust in U.S. democracy with misinformation about non-citizens voting in the 2024 presidential election.Arizona Secretary of State Adrian Fontes and Secr...',
               url: 'https://www.foxnews.com/politics/battleground-state-officials-say-foreign-enemies-using-misinformation-undermine-democratic-process',
               author: 'Fox News',
               image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/10/1024/512/pa-voting.jpg?ve=1&tl=1',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:20:31 +0000',
            },
            {
               id: 'fdafa8a6-17a2-42bc-8942-4d3b6c5c81c6',
               title: 'Search under way in Wexford Harbour for teenager believed to have entered water',
               description:
                  'Coast Guard helicopter drone and lifeboat search for man believed to have entered water at 2am on Sunday',
               url: 'https://www.irishtimes.com/ireland/2024/10/27/search-under-way-in-wexford-harbour-for-teenager-believed-to-have-entered-water/',
               author: 'Sarah Slater',
               image: 'https://www.irishtimes.com/resizer/v2/O24CKCCLZFGJ7F23IRESRMGWRM.jpg?smart=true&auth=cea83b36d121a59eefdea524028d11606f2543b6fdb8344f3507e9a3ef235644&width=1200&height=630',
               language: 'en',
               category: ['regional'],
               published: '2024-10-27 17:18:08 +0000',
            },
            {
               id: '5ac6e829-17a1-4359-be34-443df1cc1244',
               title: 'Trump holding a homecoming rally at Madison Square Garden',
               description:
                  'The rally comes a little over a week before election day. Both Trump and Harris will barnstorm the battleground states, with Harris set to deliver her closing argument on Tuesday evening.',
               url: 'https://www.latimes.com/politics/story/2024-10-27/2024-election-trump-rally-madison-square-garden',
               author: '@latseema',
               image: 'https://ca-times.brightspotcdn.com/dims4/default/1774c7e/2147483647/strip/true/crop/5627x3165+0+294/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F77%2Ff8%2Fae119b3b4900bcb5fded19524bb1%2Felection-2024-trump-76874.jpg',
               language: 'en',
               category: ['regional'],
               published: '2024-10-27 17:13:39 +0000',
            },
            {
               id: '52746f00-81f5-4c01-b112-d0cf7d34a5a7',
               title: 'In devastated North Carolina, I witnessed a master class in the most powerful force in the universe',
               description:
                  'NEW You can now listen to Fox News articles!\n\nWhen Father Richard Sutter, a former U.S. Army Airborne Ranger Infantry Officer, summoned a handful of his strong-backed St. Gabriel Catholic Church paris...',
               url: 'https://www.foxnews.com/opinion/devastated-north-carolina-i-witnessed-master-class-most-powerful-force-universe',
               author: 'Mike Kerrigan',
               image: 'https://static.foxnews.com/foxnews.com/content/uploads/2024/10/helene-asheville-damage.jpg',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:12:49 +0000',
            },
            {
               id: '2cc474e0-d8fb-4962-8dd1-49e975381df0',
               title: 'Wolf Pack football team loses to Hawaii',
               description:
                  'The Wilf Pack fell to 3-6 overall and 0-3 in Mountain West.',
               url: 'https://www.kolotv.com/2024/10/27/wolf-pack-football-team-loses-hawaii/',
               author: 'The Associated Press',
               image: 'https://gray-kolo-prod.gtv-cdn.com/resizer/v2/WTVYKJD4EZKOXGFWUKUXPU5EBI.jpg?auth=999b69cce0197c07a738a0d3c872dd9777c6657aa9163994402cbe84d92347b7&width=1200&height=600&smart=true',
               language: 'en',
               category: ['regional', 'hawaii'],
               published: '2024-10-27 17:11:25 +0000',
            },
            {
               id: '781e00ee-333a-47e8-a90d-8a9ff1372742',
               title: 'Man and woman arrested after body of Stephen Ring discovered in Wexford',
               description:
                  'Body remains at scene in Shelmalier Commons while technical examination being carried out',
               url: 'https://www.irishtimes.com/ireland/2024/10/27/man-and-woman-arrested-after-body-of-young-man-discovered-in-wexford/',
               author: 'Emmet Malone',
               image: 'https://www.irishtimes.com/resizer/v2/MG6RA6WBOBDCDCFGMJDJ3VSX7E.jpg?smart=true&auth=15e6fe9d1b2bb1c784da27da1d3a0ac4c46f2477cc047fb6e265e6670d509a63&width=1200&height=630',
               language: 'en',
               category: ['regional'],
               published: '2024-10-27 17:11:14 +0000',
            },
            {
               id: 'fd7e7ad1-c854-4d7e-b7b4-5fffa2eed278',
               title: '3 Side Hustles To Pay Off Student Loans In 2024 - Forbes',
               description:
                  'Looking for a way to pay off your student loans faster in 2024? Here are three side hustle ideas so you can shrink your loans, reduce interest ......',
               url: 'https://www.forbes.com/sites/rachelwells/2024/10/27/3-side-hustles-to-pay-off-student-loans-in-2024/',
               author: '',
               image: 'None',
               language: 'en',
               category: ['finance', 'loads'],
               published: '2024-10-27 17:10:11 +0000',
            },
            {
               id: '2f40f9d1-bf15-46ee-bf2f-1d6136fbebaf',
               title: 'Five fabulous felines are up for adoption',
               description:
                  'Let’s start with Vixen, a beautiful two-year old Sphynx who has a wonderfully relaxed nature and loves being playful.\n\nDue to her unique breed and beauty, Vixen needs an owner with previous experience...',
               url: 'https://www.southwalesargus.co.uk/news/24681170.fabulous-five-cats-adoption-greenacres-rescue/?ref=rss',
               author: "Dan D'Alessio",
               image: 'https://www.southwalesargus.co.uk/resources/images/18695486/?type=og-image',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:10:00 +0000',
            },
            {
               id: 'db78220c-0c70-4c3d-a44d-66de0fcf68fe',
               title: 'FTX settles lawsuit against the Bybit exchange for $228 million - Cointelegraph',
               description:
                  'The FTX bankruptcy estate agreed to a $228 million settlement with the Bybit exchange in an Oct. 24 legal filing, for a lawsuit first filed in 2023 by ......',
               url: 'https://cointelegraph.com/news/ftx-settles-bybit-lawsuit-228-million',
               author: '',
               image: 'None',
               language: 'en',
               category: ['finance', 'bankrupt'],
               published: '2024-10-27 17:07:43 +0000',
            },
            {
               id: '989f5c32-c6bb-4b11-93f1-55b2e6207f4d',
               title: 'Columnist Jemele Hill rips ex-NASCAR star Danica Patrick for Trump vote, takes swipe at White women',
               description:
                  'Jemele Hill, a former ESPN pundit who is currently a contributing writer for The Atlantic, blasted former NASCAR star Danica Patrick over voting for Donald Trump for president.Patrick revealed in a post on X she had voted for the first time in her life and made her decision to cast her vote for the ...',
               url: 'https://www.foxnews.com/sports/columnist-jemele-hill-rips-ex-nascar-star-danica-patrick-trump-vote-takes-swipe-white-women',
               author: 'Fox News',
               image: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/10/1024/512/danica-patrick-jemele-hill.jpg?ve=1&tl=1',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:06:45 +0000',
            },
            {
               id: '7134ebb8-6e35-4bd6-9d91-4d6ee6e238db',
               title: 'Egypt to Double Down on Natural Gas | OilPrice.com',
               description:
                  'Egypt has played a leading role in the global energy market for several decades, as a major producer of both oil and gas, as well as a vital transportation hub for energy products. Despite disruptions...',
               url: 'https://oilprice.com/Energy/Energy-General/Egypt-to-Double-Down-on-Natural-Gas.html',
               author: 'Felicity Bradstock',
               image: 'https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-10-25_l1fbofjxmc.jpg',
               language: 'en',
               category: ['energy'],
               published: '2024-10-27 17:05:05 +0000',
            },
            {
               id: 'b13ed1af-e347-4195-bc01-060ed02a1581',
               title: 'Grants support local history - Ballarat Times',
               description:
                  "Applications are open for Victoria's local history grants, offering up to $15,000 for projects that preserve and showcase the state's history.",
               url: 'https://timesnewsgroup.com.au/ballarat/news/grants-support-local-history/',
               author: 'Miriam Litwin',
               image: 'https://static.timesnewsgroup.com.au/prod/uploads/sites/9/2024/10/Untitled-design-19-1.jpg',
               language: 'en',
               category: ['finance', 'scholarship'],
               published: '2024-10-27 17:05:01 +0000',
            },
            {
               id: '87403a18-cb15-46f1-94cd-f77be9232815',
               title: 'College Football Power Rankings: Colorado makes its first appearance',
               description:
                  'Our college football experts break down how each team in our top 25 performed in Week 9.',
               url: 'https://www.espn.com/college-football/story/_/id/41983959/2024-college-football-power-rankings-week-9-top-25-teams',
               author: 'ESPN',
               image: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1027%2Fr1406417_1296x729_16%2D9.jpg',
               language: 'en',
               category: [],
               published: '2024-10-27 17:04:37 +0000',
            },
            {
               id: '4f2cbeed-023c-42f0-96c8-ec7c63b76c2e',
               title: "Our fashion expert's supermarket picks for winter from just £12",
               description:
                  "It's time for a winter wardrobe reboot, quite possibly my favourite shopping spree of the year (after Christmas, of course). And you can find irresistible items in surprising places...",
               url: 'https://www.dailymail.co.uk/femail/article-14007871/fashion-supermarket-outfits-winter-party-season-bargain.html?ns_mchannel=rss',
               author: 'Amy Kester',
               image: 'https://i.dailymail.co.uk/1s/2024/10/27/14/91339143-0-image-m-23_1730040049555.jpg',
               language: 'en',
               category: ['fashion', 'health', 'lifestyle'],
               published: '2024-10-27 17:04:05 +0000',
            },
            {
               id: 'bc6f96f1-0b4b-4302-8054-4f49bd507091',
               title: 'Harnessing Heat for Clean Energy: The Future of Thermophotovoltaic Technology',
               description:
                  '... sustainable energy, researchers are developing new technologies to efficiently convert heat into electricity. ... Renewable Energy: Solar Panels ......',
               url: 'https://scitechdaily.com/harnessing-heat-for-clean-energy-the-future-of-thermophotovoltaic-technology/',
               author: '',
               image: 'None',
               language: 'en',
               category: ['energy'],
               published: '2024-10-27 17:02:53 +0000',
            },
            {
               id: '5ac5a2c9-b080-49ad-9e61-a5db62183071',
               title: "Orange County man says he won $44 million Powerball jackpot, but hasn't received money",
               description:
                  "An Orange County man claims to be the winner of a $44 million Powerball jackpot, but weeks after the drawing, he says he still hasn't seen a cent. \n",
               url: 'https://abc7.com/post/orange-county-man-says-he-won-powerball-jackpot-hasnt-received-money-weeks-later/15476862/',
               author: '@abc7',
               image: 'https://cdn.abcotvs.com/dip/images/15476774_102724-kabc-fri-6pm-oc-lottery-winner-money-vid.jpg?w=1600',
               language: 'en',
               category: ['general'],
               published: '2024-10-27 17:02:35 +0000',
            },
         ],
         page: 1,
      })
   );
};

async function fakeNetwork() {
   return new Promise(res => setTimeout(res, Math.random() * 2000));
}
