.gps menu |//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vaich7vLdQeUgMMBPc13

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/efb1c82a1c11caa338b8e.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `*Astro-𝘽𝙤𝙩*`.trim() },  
            header: {
                title: `*┃━━━━━⬣Astro-𝙱𝙾𝚃⬣━━━━━┃*\n\n*◞❐نورت يا حب بوت استرو🤺🔥*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت استرو*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*┃━━━━━⬣Astro-𝙱𝙾𝚃⬣━━━━━┃*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '⌝قـائـمـه الاوامـر⌞',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: '【..≼قــســم الجروبات≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الجروبات≽..】',
  								    		  id: '.الجروب'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الاعضاء≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الاعضاء≽..】',
  								    		  id: '.الاعضاء'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الانــمـــي≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الانــمـــي≽..】',
  								    		  id: '.انيمي'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الترفيه≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الترفيه≽..】',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الايديت والصور≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الايديت والصور≽..】',
  								    		  id: '.الايديت'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم التحويلات≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم التحويلات≽..】',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الادوات≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الادوات≽..】',
  								    		  id: '.الاداوات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الذكاء الاصطناعي≽..】',
  										      title: 'Astro-𝙱𝙾𝚃',		 
                                           	  description: '【..≼قــســم الذكاء الاصطناعي≽..】',
  								    		  id: '.ذكاءاصطناعي'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'منصاتي🤺🔥',
                                      url: 'https://www.facebook.com/roplizer?mibextid=ZbWKwL',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;
