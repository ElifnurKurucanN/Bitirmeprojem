import React from 'react'

function Navbar() {
  return (
    
 
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> 

  <div className="container"> 
  

    <a className="navbar-brand" href="#"></a> 
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAChCAMAAACLfThZAAABDlBMVEUSPnv///8RP3gAMnIALXext8mToLcANnf+/f8SPn0ANnR0hKt3gqf///0NPHr7+/4AMXUAJm8iRYIALXLv8/KVoL0jR38AMXoAK3IAMnbHy9iIk7BvgKP///q0vs2ssscAGWigqsEAGW3j5u82VIVldJvV2eR7iqxBWIxZa5cAI2k1UYd8jKnCxNakqcMALG0AIW0AN3Hq7PMAInQAL2sAKXhid5tHYo8AHmfP0d1WZ5Z/h6k8WY9AW4Xi7fGMk7Wrt8IoSXtle6c0TpMQPW/V1eaElq40S4dNaI9vgJ0AEmZYcZMABFzW4OM+V5IAEm8AAGGjtMKDi7WVqsprgJ/V1NdDYZMABm6Qn7O5wsqMKMIZAAAgAElEQVR4nO19C2PaONa2ZQOy3Uq2Yy42YCgBTAlQwGlgSJt0M1+bptPNzs67nbzN//8j3zmSzdWkgWTeabs5cyG+SLYfH527ZIU80X6k/N038MMSIMfgnyfakZjguXL2iXajMgkEctXjUuaJdqDjasxz1bGiPtEOZD6H4YrIPTMN5Yl2IPqc6E/I7UNPyO1LT8jtS0/I7UtPyO1LT8jtS0/I7UtPyO1LT8jtS0/I7Ut/CXKcP1pX3y/9Fcjx3lv+8zPwX4CcYb7Jao/U13dMfwXPueUo81h9fb/02MhxxVBti70dc/6TS7tHRU6Ff+nYnpAg51JTVR/h/r5femSeO5iJzIbIBkVn9BF6/G5pT+S4kcZQqsKdDgkYdBmQ+oj+1Ey3J3KqsoWfuHYWYQLSqnpbxNzPwoj7jtZxJx0BVT1pIHLh4ZaG5paGPxztiZxZDYepY1FVhuci791LH6q8l8/8HDp3T+TsGvF5qqijL4k1aZ0H7/z061VI9+dguj2Qo0Aji1SH8LvJPqV/hBcatQdNN71hSOoO/JoPvO+/n3ZGjh90nlWrFULKv1arb043zF2zYwNP8WHnYP0Ih3bVTxaJ2s+qz9s//JDdnedgvAEFooSnXNxAzqDcwJ422ZF+zs9rWZo3/4XIqaVWk+l6QHRScTZcLCOJMW0KQYPSMtPBTAZbz/3hgdtLQ3C3ho5CdLYpyr7RcFSAhjqbOD8+cPshpxUEcrsHRMw2Ihf8v50bfoe0D3LqyTUj4ClMTGVHXzdzCyKOkK+lXW/zO6S9eK5Fot5hjWTdHR1TPrasyW8V0nR2vc3vkPZBzq+Xh/z9SfXcTNEDd1/sXPGVUstq/bfKudMhN1DHtnYcrPwUdYrqm93/UuSM2Fbjxq5hX1M24D++B/GwyCYH6HbwQdG1+Iki7A+MCdMv5oaoU5UUrxR2VvfgNEOl7oJsuvaiVNd2Xc2N93I4I2O7xryt6S2a+qaqqquPiFY7tV3HcVyNGsqmoaCWNGyZLswfiJxbnm5wkeFNOsONm1COmvukEs3L2oLqlWlmpZPiAHffVgV05q+wla3ViskdmZOlto1nH0/WgtQqzxQrtx+ifLNcn4ztzee369hykv7GH8pz1uVSNMnw8RG8S0JyaHfwJR9D5VNS3GOoZsqrkzeivmcoST/jnpzQ0RD3oBXkZJi54vYrK7M+SPlMU5ZvgSrZxfSZfMNclzx8Kg6H6TbUfZADcZa631DGU1JewEOH/+k7qpclUUgajqGd1obzEUDNHOmnh+zuInUdOUYG3uLGenJXw8Yt6dkskFNLldW2xOq7i/yJSs+i1ZcyXYXO0OpyYtJF6uPfC7mtch3gsJI3YiivwZ2tZP4k1wfDMsn+MglI6CctjdczMrC39L+9EGUTuYDUS8nTpyHHtiMHbasLocUvLLYyY4s1veVLG4obI5tLfeP3Qa7Y2/Zg7oyRqRnbKP6MlEPwykIwWpw6CUm+Ts5bsQYxhvBStS398LfbLj1HjgEmGNhiuk7mZuQ9kWPYVNcZ/rWIGg7DBDgmz4lWhrJijNuS5Vg0Sru1eyBHJ/Vtw4xbhFwKHjfowTnJHh5FpIbagXs5Qj6OLok1lW3p1bIEWoPHLp9twTRBTj5jgE+vk0bi9t4XOclw4qeetKVT3A97ZaQRHHFlvHptu5Zw401a4uAeyLm1yEs/YiIcM+G9amd58nUEQ7JxLF2ykw6LLo4nhFRFY78Bp1a2WH8ey20ZyHOeq/Y7/UoonzFMgjT3RC7X77+pNAWHMSvR+naD6Xj6oPfLyL6qkUilawD4VsKx2bRw2t3IoZOlaBZ7ydEW2gC+hHBYI5C6HkD06VhpksuRKpheVdwuIVfHLYtUUBJ6IbBMeeMNYD2FStskPIFfZbOeYo7cb6ZP/aEMKueT0XNP5N76JjWPmgFGVUnC3Z7suPkLqD9uet0iV1f53u8k8o9ZxzsjpwxHo0Ng68rvo9FwsybuJMT3+NmkTp/kT0fAdhNvoby0Vp5UHTUidYBuTAJ45PUxCSiPRsf/hGGhvoArbL6bOXIjPHQiN6IdkRODzezIObyTmO89wcBkdiI3zQ1x4YQgGGJqp4BzJ3L8AjmFSAkRXW10Pn4H+8OP6lGD5C+cNmPTZTtVpcUIeNAEpapxYwDd1DZi7/SLLmRQgFcoKxtXWOE5e5wXQIUneyBH36whNxNDn12NXJHCW39p/ICwOXIDbUfkwJZtyPYBKW8YimBLTPF5nVGZhONRheR7VOWc+ujtaOgocS0kdc+pkdDIvIIbzW16EfQgRG7UA8YqKfUUc+TevKtUCk08lZHLHTVEC0arPWwK7RIkdoJdi4EJa5XqjQ0e3KrV6ufEUcE1jLzexOZbGiLTjZAfrIqTwpK8i8i9CElZO26Qa4VS1zn71KiVy7f1ztTzqOENSNkeIUvijaQgp/CThs5AZ0Y3aYHiVd0qf8/dHe25d//T6V8KDQGmRyLs6ReyRKw88Va9Wqcpue2D+Ekx4r+BnKqe5PDeZocp1XASubBJGqNhjZR96l3VcTzpltBK+Vp7qJ0AosZRn1iDdJ6DS/yzidbGm1THesmew6QZjrf8S76bPRebbUzw2PwWDJ5nRKLJ8M2RcEVW8LexhBOsx8LNnMs3rZKjprBCiykGhUQOjI0RhVE5dNrXoKuy1TOlZPNeu4FbnSHYdNHLUVfcfRpyKt4jsPXMuxO5OXOwygt1R0t40TZoavOrANPpur50uLn8iOB5Ca1qnuGvTg42TLpvIcf/RdhlO08qm+zKKUU5p7ePi+ek8MtBmei1G+/QK3bb1W7PeeG0GhYJW4fPGOs6L3HQYyXnRjcajOV/NZj1Pu3yKX4ruMR7el8BOS8ai6e0+9bKghlBY8moPIpEz4OhjaOWBbnMWojqm8jZ9fPpEMR4uBE3oqft7htoWP59mif937oBGfTcoVGQ8oFE2Zbjc3hzlcNTi3V+z8FN1qHJhhbwoprPM22rn2YmryLHxOgi1eTMdeTYFh8iZi19oCw9pKGUivXE58eWOrjg8p1wxeyS+FK2YD7SdNfDd99Cjv5nDDqbDwsbR8dt8RpJ+TOw3Qvws54dqU6BBYsHzZrUm0Yk+6IVkcpXuW/De1Z7l0MYCdpF4U7kcoVGriEsLJ3NU2dryOW2ICduE+lq9RKqqg2n1dxtyGJR+NZMkBsOxK58ybdbsu1GHPJbyKlyNx1vHnVzqOZJFFhnAFzU0zgNmXCsEw6JWqZphqSGzkWko7gcbMS6DIUaKrgoaVdYQu6frq/ZL8poWTCSWPuryPmC51KiTO23WXlD4ZoXpRrc1Eru0C3Lm07YXlV8OY7Pc7lcHPXb8MC+gVwCtLoZajbUUV68mKiYqZKIjhU7wjufC11wdsgZHTsD0L1od+JTq2mePVcMY9MIXkVuBGLGgJsV2HQTaVmUbyhrIwPZ2UAcLm5Ywv5rIi3ByUrsX0WgwAI1xmfyxMs4fmWMO3EAZSEo8uu6/yExYSeP/Z/btMXy77nqfSDrFESmwV+HpJo5KoPbSKxdw8IryCluRUitBXJcmD8wfMHnM5xIPG0+GZJLPoQrmM4KmgvnENjcnHhCsBlUxpZBDSYhsXD9SXTwwB4TOXwp5ZNfIjL1FfPd5spODGNO/H3eUt1X5EHI/dtznFErLyQ5eRn3YthhPJQc1zsayL/DJKyw7H0Z4ulB4vvzp+QAT+3tL57rOuOZPLEbx5nUg40n0TfCFQ/nuRkIuQb0ehCkLop1o6r+hAwOX4mK9b2Ri4DiqA9hibBU/Y5wDsEDKZfj4jzWSeE55XWccWjGJoIqIpvIh7Pb8iwObpKT2K8WnpcubGSWaA9mGat2ycORKx+SvAPwFNIXEyuDIQSPf/Ew5JYeQYcuk8Ncy4tgp76QSM35cyzznNQl0DbBVTXDQHac/B/Ghxt7J26TrKyOJjXPmtn0CMh18HZANFipFKkghG9IrfAwnls8RDAfrKC1/CtpiqFvJc2203lqcJnnknCcjqVrBoahhYUD/pyecBaLeJyqij2voGYWkS7eC5ZjazmwhyM3CK0T4H61eJBGahHPBNWaexzkgMUul+PHpU9kPp70ICBtex7JWoky8TN5CgMtgA9qTqwV1akTqyVVgMrtuuTBtonT/vg4E4vB1WTAw5FrkrotVVQaycCX2SFNIVUeznP5vrccS1NL3XnuDyz9qbZIca7G5xzZURBJSaf6Fys9s3IxBsBQ/byA1EqinVTaKGtW/MORY+RKWEkcLS5VhdeLYXFhuPH3YGwauGsshfDuyJXK+mLks3xYUPwV0w8MabsfCt1hhW9K46UiIdWvMNFMjO7Sldxgl8haYHtzb1pvSqVDotrpydyl520izryN6yw4N8UOFq4kSx5ulRByhA9QLAJExaLpF4uAHGyqhnoAsBWL6CNo0pvdGbk1Ti45fkoH1FOmk8nU8Nb9t7iVyIyoYzkEjIOFXaI5yvRzu33V8txlY614gC2VRUYHszBAxdWrPpjnyPWJSApGcIWIdMFyKnKVRmQytsjZey8UGS87ux9yXH2/arqn1BuoWPVOKd8ouEnaSm5KPIuFO8RR/lHT5HSl07ib5SuLq6qrhVuPgBzWR/h1MvBUt0ZuCwGGVcBoL1dIc6TSryR0VcUu7MlzxvJdYabMUDFOb/A15pP2BB7kcE5J6siVxjFgK/viAqbVqK1oa2rvl2Z0iBN2jJXcRTFy6DW6FmgilXZRnCGPmVP0FHOaYnwEnWSoWmXf0bpOqt0Hp0k7vTxIO/i6fQnYFi+nO9T1pRFvRaR5d03uNzI4d3YfI1cvKbxXKKBlYhaADlSMelbgrx4MFK3SAHvKvB9y98B1CCZCIzMBqZ4yO7nUAV3vqqAbHzgtzw0ZC8p3zve4Czl+0DPvKrKMNUTdFfFhGC+c+5qtyYFD/Xg+HcVxRe+DnEq/OacJ5HYAxsfhLdix0/UoLda5wEUuMCrZ2L1uapnsCAzr5pbSBkl3ITcuFPy7kZM853IaE9iNdEFYpSP/Ms3LeyDHb+5+y+IcF8ywnNcm5Dylq1IfPH67mF8KRO1H9h/waF/v5NttyKEy8a4/xNOM0p83Qc5pd553kLomv8E/n3eeP38OW8pZR9Kv7rd4DgW3XddF9n7pbYFBE2M/ljrRNJ1q21b9q47pU3FQ1GKgdoW3TJ1uBxXl5dsM2BSGKV4f3L18kTi6cZccFKBV5+/YEOpZgE1ll14/WwWP24hPGG/e8VaeA1vWJOQ1Rbt2y1SbBLnDP2NDvOzSXGzNA/3p0SScHb34BnKivsRrkq6/qsUMdVoVNDnVUGGa3U/Pqy2q8CLuK02eV6tCoh18qlY/9Vqw8/PYUI02bBUVOoHtCxQiX+CPL9CtZ7Tfdd50M/CsPO5YdD5Wep++VEVZK3T0pcj56Zd2daoYF/EZXXNj9KcjpxY/HhgURlifHxgfi1tWHpkjV47DCoAcIjTr8Sxo1plH+/GB5jeQE9czwLXMUnB/l05SS/9I/COrrnHF/SC9IAoqguRfCFsHlKmLaRZdKPDzYRzw7I6xCghVxVCUc+UoN2vydqKKZmh/LFyv/JBi+U3owRvB7ZfcxfRwQxO5FnlKzr+XVcI/hgQrGtFhIeGq7Xw3cpckqh5rdDQNd0GO8yxcCsMW4OREp0vyxf6HjDCBN88GruJhuWBBIMdY3vMjkYV4r+QDnRQcvNy1A/yEquuUi5O7dFiA1qR2YoxDWcBoMQBfa8zjb+x8hK4pA+SMIgasALkaC0DLjLsYFsA5qQwrTu8Tn1Nf10UURtdJfVulZSpyhWxm9LkZdZxR5c/7I2f4XkWciinrlXU5YucD2wIK3ME6mgJVaBud/9EYWSX/2r7ErSFcjog5ZRyDAKfURZ47zVQRotkJ9wuEyfxSEJqK3ZhnE0neQZ5jgueYiDmDTc8kckTeFTTs0/sgB7BURa42mmxXzYlVskDOcQunag3fU3hjX4/c+yKH5XY36NoGVsFbyaYL5P58l2tY8ER101tFTvXwJvuH5xh88s1U5FoweFjTxkqRgLHydNr+ELpclEKyZqWA2a2+b96BnFV5V4gCwq5XKyS2IGco6nGNwJVqo02raYHcGs/NTrv1WhL3qoWn3UbML99EDvTfCcLMmofKygUFcreH5iGKqIHmriDnGMBmOguv4H+RpqTyXLcJWMB1VbUExopONW5q4LByQI6R8gsfiSoLObeJHPuthFWUJL8KxHZ7zhTpEmvrWE1BjsmYLRKWdWHM9b7Iodke4JhYc3kEcrUTVcOSy8Y6cnAPkQgRioxfKnIikwlqArgaxntQ/0hLGQwbw2i1YuSoIpH70+Fj1SIbo/WQajc7IAf3ZrUn1rxS7z7ICfT0+EdfCuTfAzl+AU/faq4b/4gcs/KCka0LvoEc/SJjwuBzpSOHGqCOlShG/GpYszzxOCKnEwsTQ9HMQ+QCPcAoXLDBc8HppI/vZs2l2IqcO2iqvqmGd5j168iF/Voht4Br8KncL98bOT9n3QzpsBatFnAsNARjU1/JrCNnYOkMPGxfU9KRQ/6XtfwIcpxHr7mqn0gS0YR25lspGkJcHTTEinG2DTmufD3GmOBRYStwaxpCJ58zQ2qRRWHJlePTeyM3fscxwjZ81+PbkPtgGhs8p9JPiM25B47HFuTAJhk472HooP5mEptLuoRcdA/kdPKHd8/Ryn0Mfhh3TUVd5jkdxtRkdODMFsAB97x+G4m3fB85B7Y/YjY2NjVENAtFquqrP0duEiOnKMd4F/2SEvPcNYzEFeSw/o+cvheuG6/Uwgjhu/bAnoNbDpHAThTI5eEy4SZyMq/Y+GWtlPgR4nMSOZbvHZXPh91FXUnusHxuZsRMl/sgl05SQxw6I3Trmp6wSsCHMD/jkwrkRJF5m2LeAcMK1xlDoUvIhb80sfzpCM58D27u0D1CkCIqkCv/NgTSpIZgs989h+qbPHc0gMeL1qvXHwu5wHqJzk7nt2aiZi2c5XJ+oUX35Lm7kBtpThWf17ZrwpagDqZvmwvkhB4zf8VLmKYtMoQHXFolGfSgWAXhubkYmqbWS5DTSfnQt207tkq22XPslxaxAlJYm+zyaMhVfRgWwexYFM3g/uwhShKr1QKmeyByIVirKFNDz+/jWKu30QGIZyItkBO1WyysvongnPxRjJw5LIM1YnHVnDIr22l38N1eu0LONXMYin1VoXdZwuTYK4ONlVfu5X3tihwpj0JMs0dHF1G/obNsJ/w0wjAjsw6APR6IHIsld87n2nnyZpguTb8l5Ox6kCStSYUaMXK0hTsHx11LFlGgpdlHv3VJRdyJ3Mg8ZcvTzR4XuYOysJyaL15d+E4BxpOdPcYQhR5Efv6hyMlJbaQJZoF5Y5FYlHak8lpCTnAZrvLJSM15L2u5uqYiFkMi00txTNdFBUlilei4I1ryW1N067E6EpbhapjyEfKtf/z7ltzmRFlMvnty6xl0Ure5V3Z78ZSCS9L8d1/8md91BQRuzqNMrCZCAX5LqG8WdmO54+FVfo3tdbMhSpry716DReUI5DArInA/6l7LnvIVsFFLy1EmN1bLCj/AU28wygQPlmgIRRW/tRXT9hF4LhpE5H+E62C9tMeFvuOBET06rduqiS4TYW+YVZYg5lOW+vsGvWxLulIycco906s+e946Scwl87TdnnyUf6uGbUzePOtq/nvMj15N2m3Mm/tX0EH1gJ4UJ8+etac2lmYaZ+05dbnag59TuDkDmrSLnE/h94byC/iZUCxkw/NWLLRHqI5gLMgPGGgf8gUkgXt5nSdB/rpuKpxeYIiRNecVkDsjBzdtIo3NRUuwMemyiTCmKxOruGlyGTUwTDo2wUhUOR+P6RjsbO5Vstk2FaUbFDqNCVPW/tjEkLkKfSNAXGxSvDrH+g7oaS2k/hDkvJj7iS7qTEn+BdqKh2K8MI4VJYdY1Mf087koTl2b8/+O+Eu4ic2Zf/ehjQrnByE3i51UPSBh/dO/ev85MhQpXYC74E07/UnxS2NmzV3Z811XrHtkMif1V1klfVXau4n7b43VWMRDkCvVYuSCSB26/vvMn7WhR8Epx6msjuqNchhBsz0vjA0LEer+O8mgeC+NjVkx3yR6ZhH9y6PJuXgiI1rotvJepeb0sh6eeQPwwS9DTw1rhS9Y76KiMyGRq/3dC8/JbFxaYcXdzYYY9FmdlP+gdZnmmaFfTSPT/fT2femElJ0CeOP9d26BdH1qfJmA/C0mZZWp82z+L8kWL7u3azNjiDm3/O7IbROpB0m96DMTU+9vSuM2dE/BGy+gAV+gOHW4aWJ5syxSfplqzxmianHLPYNujAvfZH7ZmFfUiTQwF1VyS6fPj4ouuTx7Ua1UBG0fZhRDthKnJM3VRc+ybEzOtEbVYIjZsIVdq8B472YLqzixucHqmpPXyRsfC29eo2+Zdd1rMiipN+DLFuO1BHSW31Jswbupc3MEElQTFH9uwlDGvhaTL4b+2ISD847UpaNxNZdoPbdpxspl/4i+Vzkc8AV0lGpiUSRq20nbuJ7OtD3XK0m9MHxZ6O5cYU2f17asiZHk8FmknYD39Q4n5jVdLwsm3BGoj9BDG/zcdpPZvXUv/ctC7ux0C9OptFqQ9Kw1xFPoTS7eUchVTFw7Cf56N58CYS6O5sCtNYrxVvVAjjTeyr17VwG9/7YBey+wJAPPrVJlfiGgiVgZzJtky7NydqKZuLQqdLirJUzdQT7dmDCUooxjMvIWp0g2bK9Mpv5RFBDrgqr5pmN+AafJU6yY56ZbwqQl1ihtsRTc+XIrpGwCKywFb8XCRsJtiuaTD48WRzFtI+w3Sbe++GIKulGRC6MQ76lhx35Vd6wIfysmcGvBCE7s9+aVqfivcPcOdcKiqt20yEuaujaTmqkJSaeTBubVwCYJrSPvE3rkjWNnZokQRMWrxiwXpqRu8QJalTS9Ld/NWUKOleMQZLKNkU0tiaDLd7mOXG+xeY3T6ugpnu4qhl0hAbNsVSzkgVNTVpArqRwX3Yil+MBVbEQue3+/lRdvWr2LKmGNYq/XSlmdSX0pDTU98gDf8tC9rh12ME4DDHhUIY5WCMhLJ56QJQK361eAblvFAWHTVq93cxdyGC7pjg1zjedSkEvs7vYyctAcOWyOnKpFTGcdTczwmo6NdZ6jIhCISTcs490Dudmiu9TiT68Wq9fpaAb2Du34sUzT4fyOWbolkW9YTM5hSUl608/W4grZlAsI5LJXn6tidPmqTClPu0CfP/N0nvt0JQ4fxBNg9atuFQSInjcXyIExionx6H/rAGkZa90Ecg1s2G2fUcW9FcEox62KCMmuyCnKcT9ZsaOeskYOBifiJ//juEAsOu4kSVYWMPZKA9NkMJLzMHTSSmE5lfq3CQdNnBQNK5B7NaIYAySvXIncnyOwsGVxXBpyLR+O+mM1Qc41zRYOhB5fQo5rEdzilQWS5QZ1qUDuqyciAFRRXfSEqg5cR6yZsDtyqv2yicEQq+qki3CcrCuiXy9AGHedwXyNC/gvfzwkpPO/ZTkXKLcxEx6BN/ioL9La4YWdpl8FcvWXZ11LZDzjMga7WDzACRjpyE0PsJRM2GoCOXBwjvGGbswl5JDpiG4FwHKYcRTIsRw9gJZY/w72gM6sV/2pmaFw37sjBz02MJcavkg9iNZ1Vi76EZYZeee8Ikt0fXwFTymGr45jNbUDlf8W4UIkb/zUKj2BnNDgAWvasW6VL0eY9CnIxXlLrEiUyGmGOsI80nSZ53BGoexHjgVELh4/NQ1xFdIaaHZW2l3OIYnCDUY+bi1THcWxJmDNsiwFTGhw3CDJuoLRNi+b81Nxy+FJqkknkJOzMBkGzqRuhVEQMGGLpCCn49GAYJxyFbmbFeTAVBTQ1GSJkuA5Hcv0ApymkKyRgy91yvdBjt+AAOo1ty4dh4v0nePN6vB4lna6jFzht2tZesaCqEi3OVj+HyRETXaR6uTJDypIURth9GCZ54wtVok4/nkFOQwa3tAl5MAjG6IgYjFPCOSkXPkHpr2NcVYstmWJ7ndGjitatln06bC2vcLdUMfXSWJ/0lgCjs2oMIkYAeC2RhONo3xj9F7rRV9T6/AFcrNX9Toq6Fe+tEqiRh2ogA3SkMu+wsOtJeSUTeTwnX1FKeNIO1IgNxMdf5LpIHs8rTSusTyR7oPcuJPBmYNe/45np4ktxJZXKyFizq2YK/6Bp9R2x6S+/eKC022OO6nnCORyx7bI44bDWEMc2rbv+9s0RG8IB4XbukCOpCF3ieWby8hVRr6v2XJ4mT4Hl1bDWrge30fO0Xit562PjuRc6vGIWqZ4vShwcu6cBUFlyCL9CgK5wovhCwwPhV6M3O+a63quPUfuN7nCtRojB8dc7SThOevYxtaMFfkaclh49Wc8mCRyR2LVazBEVHdSVx1v1MNa0eJeyN2HVMNtzeIF/taIkeurbT7pfUgg1ywPZkKYJ6UzWbEsNUpygVxeLlNdMKUPIRa2rg1ueOxDZGshC3QSusq3kPsgO+qbhv8ZPIhwULYCPcgf7aVb70XgIA8noeSzJIopWbBZHT7oI51YSILLp4kys7aw5+YXwPU2tf58UjmbeYgcS4zxX6X3hadjOaFw/ijObFpCTiRZBbm4nlDc1a1Nr6RCF311qKjHFlMDF/R4XyHlJ92a8LNEIl1oBmvQdnfPsK50KpemFWuLiglm5rM5Owfo8Zv9uVglsyEgp4s/8V/0+FsLwdHXMArVFTwnBwH9SqwgXOI5Eher1zKqUk40LSkMRW3sbrGSXQj4zjW7jXJeXNGKZo3J2H1w9NzNonEGVpZ1XUVWGX8igSRGzmWUKUh2lDOgCeZbWBfBX+I29JCvTeXaTaewo5mRyGkVuNPZEs8lTWuvFfVkMojgSaChaxhYyc5YdqU4/RG/fAsGG6eaOyod9HpF08kIdkvpdJfrGCesqGMAAAKzSURBVGqyCIUtVto3DGO+LEURHSxVXaxTUQS/t7g4qmDCWm4YHq43JiYB4wnx9E5VwdOSMQF/znvCg6Z2ZBu+Y3MZjEZ/717Vrg8hfuc3qnf96lBCGzvi75ts3Vza3nZvm4fWL5V+KtLe32+9zyzeVPpZviS87zeDjdzOH/uKL9jY5wMb3yHt++Xbd81dP/YliZ+RB0/l/z5oT+ScMtnyuY1vEKj3X//udPXj0B7f0rTt4RD8wIpj2/YuH1PiY2j4oklqL2zN/fG/W7X7l2+L2dta7ZYETXB/ytUdDF3aQM8mCKxsLXv77odnvD2+fDuNRNgKwyK59GxiOvFiPA8LXcC9VfN3Q3vIOZPKhFcQXWV2Uq8cZzcLh+ZTyuLyPxrtpSGO0FVmzdI206zY2mKxeG3hUl88JHryvdB+32+Vi4qrNL1MZFytb+lMJDl1cpqyvM0PR3vxnB0FzVvCntF0y+R1remmd+bOmJVl7NXDFrD5Pmgf5OgVKdvHfVJOl1aqZ5FWquvKDdbsjabR/EM2PzLtg5yWvXQU1e99KG42oRnN6xJ2+QJMto0RSTs1j6vUDFMqTH442mu0FvHriSCqNrM6B7MgsnDJASvSo7frh3kPy8K5Mez9BF8j3Qs5mY03UiJGY6chQ7ABK/tbAkq4CGe6avmh6LHjc8awnRdrxBRGPz5b3UmPH9nMiPLv2eGPb3fcTY+NHH7hFq1dq/iE3G6kYmnu5WdrsfD7z0qPjlypkb/K+MUwrSj4p6JHR077DzWB89zCzlOEfjB6dN2qjqVO3bSDfzL6K7KG/x30+MgZKz8/Lz3x3L70hNy+9ITcvvSE3L70hNy+9ITcvvSE3L70hNy+9ITcvvSE3L60QG5ItSfagbznhBFELpt7ot2oRpiukCfagwLyhNze9ITcvvT/ASdxtppoVSNKAAAAAElFTkSuQmCC" alt="Bootstrap" width="150" height="70"></img>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

      <span className="navbar-toggler-icon"></span> 

    </button> 

    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 

      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 

        <li className="nav-item"> 

          <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a> 

        </li> 

        <li className="nav-item"> 

          <a className="nav-link active" href="#">Hakkında</a> 

        </li> 

        
        <li className="nav-item"> 

          <a className="nav-link active" href="#">İletişim</a> 

        </li> 

        

      </ul> 

    

    </div> 

  </div> 

</nav> 

  )
}

export default Navbar