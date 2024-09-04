import MicroComponent from 'micro-app-utils/react18/MicroComponent';
import { useState } from 'react';

function micromainComponent() {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>
        <section className="-m-card lightblue">
          <p className="-m-title">SvgIcon图标</p>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="Github"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="arrow-bottom"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="docs-question"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="zhanwei"
          ></MicroComponent>
        </section>

        <section className="-m-card lightcoral">
          <span className="-m-title">Dialog弹窗</span>
          <button onClick={() => setIsShowDialog(true)}>打开弹窗:{number}</button>
          <MicroComponent
            _is="BaseDialog"
            modelValue={isShowDialog}
            onUpdate:modelValue={() => setIsShowDialog(false)}
            default={
              <div>
                <div>默认插槽:{number}</div>
                <button
                  style={{
                    backgroundColor: 'lightskyblue',
                    color: 'white',
                    fontSize: '14px',
                    borderRadius: '4px',
                    padding: '6px 10px',
                  }}
                  onClick={() => setNumber(number + 1)}
                >
                  计数器加1
                </button>
                <section
                  className="-m-card lightgoldenrodyellow"
                  style={{ marginTop: '10px' }}
                >
                  <span className="-m-title">溢出滚动测试</span>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                    delectus debitis corrupti dignissimos maxime nemo quasi ipsum ducimus
                    exercitationem temporibus repellendus animi iure id neque, doloribus
                    ab libero itaque accusamus, eveniet cumque laborum repudiandae?
                    Voluptas reiciendis est alias! Ipsam sed nihil impedit maxime est amet
                    minima atque itaque tenetur consectetur recusandae nisi quod quo quia
                    molestiae reprehenderit dignissimos placeat aperiam, error dolor
                    inventore dolorem. Consequuntur placeat distinctio aliquid sint?
                    Magnam aperiam est iste? Doloribus magnam molestias consequuntur ut,
                    amet, eos ipsum accusantium iste ab ex similique debitis veritatis
                    voluptatem sed illo sunt rerum. Laudantium quibusdam, dignissimos
                    voluptatum debitis eveniet cum velit delectus illum repellendus nam
                    qui vero atque earum tempora odit culpa ea sed doloribus molestiae
                    fuga neque. Molestias eaque ipsa minima! Adipisci iure aperiam
                    provident! Tempora tenetur voluptatum, beatae non ipsa architecto
                    illum rerum adipisci vero ratione soluta suscipit pariatur voluptas!
                    Rem earum quasi hic, explicabo suscipit autem eligendi quia
                    consequuntur vero excepturi, ex incidunt at fugit. Molestias ipsum
                    ipsam minus modi assumenda, odit odio voluptatem nulla. Libero
                    voluptatum magni recusandae aperiam asperiores doloribus delectus modi
                    qui quam? Hic quam adipisci eveniet dicta, quo asperiores tenetur
                    autem molestias aut optio sed pariatur unde. Exercitationem corporis
                    consequuntur quos reiciendis ducimus inventore culpa rerum, corrupti,
                    natus et fuga nesciunt expedita eveniet sed ut laudantium quas sit
                    magnam ullam vero ea libero voluptatem dignissimos! Magni, porro iusto
                    eum iste atque maxime accusamus id possimus doloribus quibusdam
                    reprehenderit quasi laborum, corporis quia voluptates modi!
                    Accusantium obcaecati, minima voluptatem architecto incidunt,
                    asperiores odio a nesciunt, ipsa tenetur excepturi. Modi deserunt
                    optio provident dolore atque, doloribus quis mollitia doloremque
                    ducimus ratione suscipit necessitatibus iste tempora facere
                    repudiandae quae numquam est ipsum. Impedit quas dolor, suscipit
                    consequuntur soluta voluptates accusantium quasi esse eaque officiis
                    voluptate laudantium dolorum doloribus rerum possimus alias qui id,
                    accusamus doloremque distinctio labore iure placeat! Quam alias, eum
                    corporis laborum, placeat ipsum ducimus ex illum unde ratione
                    blanditiis iusto tempora obcaecati, distinctio veritatis pariatur quas
                    sapiente saepe earum repudiandae quaerat voluptatum. Obcaecati
                    perspiciatis ab architecto eaque amet, ea sit ex eum, saepe,
                    praesentium reiciendis nostrum optio. Inventore cum tempora culpa nam.
                    Autem soluta ipsam totam sit laudantium neque eius libero, eaque
                    repellendus facilis ab dolor, accusantium a dolorem cumque? Blanditiis
                    cum, modi, beatae ratione quasi, ipsum recusandae ex aut autem sit
                    ullam exercitationem dicta ut impedit explicabo! Porro quisquam,
                    nostrum labore minus ab fugit a tempora officiis quaerat enim
                    perferendis cumque nihil, suscipit consectetur! Dolor esse nam quod
                    blanditiis. Veniam facere perspiciatis quo nulla sapiente accusamus
                    minima odio aperiam illo, laudantium architecto vitae impedit, quis
                    velit quod quisquam laborum necessitatibus? Iusto eius, tempora
                    corporis a officiis molestiae libero dolores illum aut ad provident
                    ipsum placeat quis enim, sint delectus unde ab debitis autem rem
                    labore obcaecati consectetur. Incidunt aliquam, officiis vel
                    temporibus maxime laboriosam harum voluptatem vitae fuga magni
                    necessitatibus, unde porro odit! Illum, deleniti cupiditate sint
                    doloremque asperiores qui quasi, natus eligendi tenetur voluptates
                    reprehenderit ex nobis molestiae architecto, quaerat odit iusto ipsum
                    saepe. Iste fugit pariatur rerum possimus totam quia.
                  </div>
                </section>
              </div>
            }
            footer={
              <div>
                <button
                  className="btn"
                  onClick={() => setIsShowDialog(false)}
                >
                  确定
                </button>
                <button
                  className="btn"
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'rgb(241, 241, 241)',
                    color: 'gray',
                  }}
                  onClick={() => setIsShowDialog(false)}
                >
                  关闭
                </button>
              </div>
            }
          ></MicroComponent>
        </section>
      </div>
    </div>
  );
}

export default micromainComponent;
