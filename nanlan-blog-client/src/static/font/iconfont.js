import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle` 
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot?t=1572161414146');
  /* IE9 */
  src: url('iconfont.eot?t=1572161414146#iefix') format('embedded-opentype'),
    /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAscAAsAAAAAFAwAAArMAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEdgqYSJNRATYCJAM8CyAABCAFhG0HgSsbrBCjooZyUtxkf51gqmzcnM4qFRlX+YbFWwbZ6XyzWPTgkx9ahMm1uUTr0UloEop+nrb5/t0RdRzaiApGJbQrxAqM6m1sLqqCVbI0Z0MSMn57lFNPpNCulOM2/fQyEPZ54Lnmv6jna7CyaDuiRdtIDmkkG/dkm4WcJitG19S+RsuaCHyTL7Cq0DMR5H1zBRCQ5oZfOUDwn4CZ//Pu16p4FG0nDNNQ7lHTxn1kBrfD9SNqSROJUCGkfUSlWWhEaIlIytiz3/RgFdAGxrOW9ecuBggAmwMfqHz6+G6NEARB6HC1Om2NcmmIBjeEmUInDoyZaBLQMMPR2DcAE/3Po7+gVwAwtAjEpXT7x6J184IXFd5EbtQLhsPlAMBECwAH4AOAmPA7adkFFK08cOzuhHEAbFAMM9l1a6zZ8RUullKRapMeIE6v0UURYiNNHc4KwELiYMAgXHQ4Au/mzZfyz0uBUy4cd9WR4AUdBljgRc1MsQYEcMA6EMAA60IABtaDAATWhwAu2AAC6GATCMDBVhBAgJUQwANbQwAN7AIBTLAKucAmKN9u6QBAqoU/AfFxOLbUEjCc38CWoPjvksOAyw3pKY+HrK0FFOnEE0GszLgwgGsRWugeJIHTbLgkj52Gorg+fNrcnufM5nPtcldcYNV4Om79/7pH2jpbiZrGGobNNDldt3YEyCGg4snJwZdmpa4Xs5Bk/xg2Tat6pgVBs7ab/YkAGSUcILjfOsRm7UszFGhV8yMfjBD6yKx0fq8HU/ta2cy9VwTmebrzw5eB9O6LDFZWSVKwY4UA5x4OOY16IKuCHUKscPdeF2TnWgWGACIXByB82sDp7DDHA71O2GKP+gU4vNOCKP52dLfyGX+N7X0psF3nKKZH9aG3XkJHTAm+p/7BB3r5RzP00GDP7z3Zvfn0/nXCsIi0qI4tUvDpVHR4V9AdasN7t90wMh5Uh4dmbPs6cc/Wb7n/23/7V9qDPwF7f6cszSxNHc/wbEsoJd7eURqraciwRbeL8d1KNGtNc/xNiWEgjf3F6tW6jk3uLyd3LBOf0F9uvffLb+d3+sO/gbt/2nt75HvbTHeXuKFgz9YLrhfZto46ur2TWnRBzwii5xAy7RK2kxw8e+l7cfNFExCPPfzYDhu46DoGeEXBdrugquj8vB1s5IbReHHnXWhBBU7onMAocNjpOjA9xs7jSmr7V88LLEMq2WAZ+SExIlAe1i05ZJE9ubUzxiqte7Aix3KNSBY8OTuOlnixBiOC1M3U3jXBUhCmd4kjPWbyJZ4MwqYQTU6TJ5ZKJ8yJj6yqp5ZTb0lpdqGbuUoML84/7w1dTlUf0vzP6f+sM+dhfnSp7c9OKWHiIWLXMbo4rVEUYXsQQeJ068nH7BJ7doct3z3frT2LBcinAKCwtOOwDzGbvncNH0vhtUWR0bW0hDPTtvsycg3ix97Mhs56MBI8i3yYiaOV/Vte617kvhb1SOs4VR8dvvkual33ptbPwxqQByXlUEUOGF57HKfxBeiZF0sKe/aHEF4UXkQ4HT87bc/DHbGfwwMj5OKR+ZhPrQdf4G9FseefBhzxmiBbHESRl6yOa5kHcEDOeCdv3PQJPdlzd9PdtkZs+OpVg00xsWwdcrruNasGYdLVq7EuP9MwNnkKVidzJk+thXXa1MwybYp5d4D4wvZKn0tyaI2YXFr69299dt5UZSpoYWRksDI4d1u6pSZ4wYKOSp9YZWvElNKSv3/qs/TTVGnaUVFOquCcpl+tDoYgI14LpZp+xDpHrW5T4aLERN46VqJ2ccE4sdF9nfivuFD8Hq0jPoqnJRsJQS9FiAmqV0AY83IXvDfP1ZgkSaZcqWRJknGoyJbSiXWUjZKw1EUgF0sFqlQsF5yoRxXYdVWWTJ10CRSy27gOF5BJ5IKOtRIZjHfZm8LfECInH0tNccJFIkP//rZ2IqlTSmoQHo4H2dlV1qZWCoWp0crUlBCeHW+2vchBmZKiijRl6RISaDTNdf5mzLWwtfKMsOTWEWshhFy67SZ1qDIsWyMxD+zcW5VpuqlBn4dUSK3Xq90F8vSgluxt2lmc4HlIjfR6pCaZbgfVCVR5+pYKu5hKn6cuNt7nkw+Mjz6Q/PdVnsYHZNCE/FA14NF7iA+Pijfh3wfifQMc1GtTFAn+6Q0N/qEpGlWSbnf2RQUdTGF4Iv+GphZ3qWZAykE9pevzWdlnme4wh1x20KtfQN//CZpF2vWASP4fdBm4am1/VFaOGd8BZWUDktEYIy4rLdOqjedJ8v6jR2jKuw/hrSe/yp33q5ecX/Bl3qdKK8pmJFTM8BPFRb7B56ALuXygz/hpByAeN6wXlYl6uSr7S0Fj3uzwc7GIPnd7k5UzlNNmd/zNIhj5J2YhLGyRP+q9/lKmMHN47PLYwYWvkyRQIPJT6CfSJVquE8jNwpUgCKSkgNSbxMdLDWlMKTPN4HtVxJECkYA08LTBjuMmBShv0KA8k4wYBC8oFiuyshRIRhzixeAkj6kuF/oPj1SVp6eVy6eN8JcEDnHMynRMVzNGc5UnT0qCApXc2Un2LNtZc3lIbDZ9Fk/59bOVSj+n1dKPXxTcreTj5/c+/86ZvP5/i6wP5bucYLSCN4oXMiu1/Oz6fV2oJ3PGfNc1RMgIfpryyOERfxmSMQtiF7lbnNFpdLsxgjaFeeQEfhJnHSWmXDFQVePHV2HVmMUYg8DVgJC3zuvnnDMWMrHu5ct7TDIGiGLIzBlL7LRacv0sNhrRAgs0BYE0lMJQChVuZo8nAdmiQFGy+xqXBS4J9MNc88SCMKemC8PlKgGSWJjRBBL5F+khztblq4i8bk8bJosmHcmF7qmGfr6/OyugCNGadDThuRqbcbQqodStcDFJHWkpUGjZ+ztzJKFQKiz6kZ7OWoIaTF4pNkatwUhhmMaSp9DpKcqVwbgtHBQEBdd3PmjT2gVzvHoGWn37UG+ZJhZXHnI6VCk+5CWTwezJxlgZOoSM1eiUnMJdmGne0OnckXMNWHvN9hrAYHOZa9LG+aw0VuDMKoPB/0GU4RXYHa81GucCmP7ZjzMi/UGHcWmzsb7RLYASgo19yBt6Ad7rh8/EZhqHFIoPcTPgYvWZLTjGag0RuIFyG4r9wWuaePqQZSPYkPgso7iWMd+Y8M9m2e2H2aPdaPrhS5kwgqADxw9HBsURACYTkT5N5On8eDmKnlpkpkOTqflARr5ZOCoGgC1nAQxDisw8OB237KwMurhlBjAM9gDH5GJLOPoAGo4QQMcUD9i8aXpymGvShS66ArwMB0AoGwGGdBDgKOdtCcf7gMbKe0BHpQFbemB+Qg63/RMFYxqxgKITVOZUKZUZJ3HHT9QSUg4Tve4XubGVEOgXUGx4xgr5ELs07/V1S1RQxlSCOrochkDQwOQwj+cVMdZbf/8yatfzYipbEwoMpaINXgBFTrEr5UhFLR1NSt//CWkiSHHDiKvYvxBr2NWDQH4COtg+06rTiJfSvdmedq2F5Sig+zNSAmqWg4KsJaCBXs9BuehcxQ5qbcufzVTWlZ6fnpfve+KfzyjijPwAQzgiEA3REQMxEQuxEQcNYU5LIj6igH4jaYSGzUbSo616JU+kyajIpvSne1STZpMy7p4YXpjmu5NgIaFyTd0vZKbDqJPkGGYPGyy7a5BqoGGS+gzrsL3WBnnYYqTMpO4EhgEAAAAA') format('woff2'),
    url('iconfont.woff?t=1572161414146') format('woff'),
    url('iconfont.ttf?t=1572161414146') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1572161414146#iconfont') format('svg');
  /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
  content: "\e62b";
}

.icon-shuaxin:before {
  content: "\e62a";
}

.icon-date:before {
  content: "\e637";
}

.icon-biaoqian:before {
  content: "\e63d";
}

.icon-share_icon:before {
  content: "\e662";
}

.icon-ico_yueduliang:before {
  content: "\e62d";
}

.icon-arrow:before {
  content: "\e61b";
}

.icon-youxiang:before {
  content: "\e66b";
}

.icon-pinglun:before {
  content: "\e600";
}

.icon-Group-:before {
  content: "\e690";
}

.icon-bi:before {
  content: "\e617";
}

.icon-user:before {
  content: "\e62c";
}

.icon-thumbup:before {
  content: "\e644";
}

.icon-16:before {
  content: "\e615";
}

`;
export {IconfontStyle as default };
