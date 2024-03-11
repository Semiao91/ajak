import type { NextPage } from "next";
import styles from "./data-flow-controller.module.css";

const DataFlowController: NextPage = () => {
  return (
    <footer className={styles.dataFlowController}>
      <div className={styles.dataFlowControllerChild} />
      <div className={styles.valueTransformer} />
      <div className={styles.filter}>
        <div className={styles.splitter}>
          <div className={styles.stayAheadIn}>
            Stay ahead in a rapidly changing world. Subscribe to Aquaseen, our
            monthly look at the critical issues facing global businesses.
          </div>
          <div className={styles.conditionalNode}>
            <div className={styles.sequenceNode}>
              <input
                className={styles.loopNode}
                placeholder="Your email address"
                type="text"
              />
              <div className={styles.decisionNode}>
                <div className={styles.mergeNode}>
                  <div className={styles.splitNode} />
                </div>
                <div className={styles.iHaveRead}>
                  *I have read the privacy policy and agree to its terms
                </div>
              </div>
            </div>
            <button className={styles.outputGate}>
              <div className={styles.outputGateChild} />
              <div className={styles.subscribe}>SUBSCRIBE</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.expander}>
        <div className={styles.calculator} />
      </div>
      <div className={styles.comparator}>
        <div className={styles.sorter}>
          <div className={styles.selector}>
            <div className={styles.filterBank}>
              <div className={styles.switchboard}>
                <div className={styles.controller}>
                  <img
                    className={styles.controllerChild}
                    loading="lazy"
                    alt=""
                    src="/group-270.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
            </div>
            <div className={styles.counter}>
              <h3 className={styles.ajaksTowing}>ajak’s towing</h3>
              <div className={styles.homeAboutUsContainer}>
                <p className={styles.home}>home</p>
                <p className={styles.aboutUs}>{`about us `}</p>
                <p className={styles.blog}>blog</p>
                <p className={styles.ourServices}>Our services</p>
                <p className={styles.getInTouch}>Get in touch</p>
              </div>
            </div>
          </div>
          <div className={styles.transformer}>
            <div className={styles.mapper}>
              <div className={styles.converter}>
                <h3 className={styles.contactUs}>Contact Us</h3>
                <div className={styles.splitter1}>
                  <div className={styles.mergerTree}>
                    <div className={styles.treeSplitter}>
                      <img
                        className={styles.solarpointOnMapPerspectiveIcon}
                        loading="lazy"
                        alt=""
                        src="/solarpointonmapperspectivebold.svg"
                      />
                      <div className={styles.treeFilter}>
                        <div className={styles.e10thAve}>
                          3924 E 10th Ave, Tampa, FL 33605
                        </div>
                      </div>
                    </div>
                    <div className={styles.treeSplitter1}>
                      <img
                        className={styles.solarcallChatRoundedBoldIcon}
                        loading="lazy"
                        alt=""
                        src="/solarcallchatroundedbold.svg"
                      />
                      <div className={styles.wrapper}>
                        <div className={styles.div}>813-553-0064</div>
                      </div>
                    </div>
                  </div>
                  <h3 className={styles.storeHours}>Store Hours</h3>
                  <div className={styles.treeController}>
                    <img
                      className={styles.solarclockCircleBoldIcon}
                      loading="lazy"
                      alt=""
                      src="/solarclockcirclebold@2x.png"
                    />
                    <div className={styles.treeLoop}>
                      <div className={styles.mondaySunday}>
                        Monday - Sunday / 24 Hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shapeAssembler}>
                <h3 className={styles.followUs}>follow us</h3>
                <div className={styles.imageProcessor}>
                  <div className={styles.linkManager}>
                    <img
                      className={styles.formulaSolverIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.formulaSolverIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className={styles.frameOrganizer}>
                    <div className={styles.colorPicker}>
                      <img
                        className={styles.sizeTransformerIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <div className={styles.positionAdjustor}>
                        <img
                          className={styles.layerStackIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.groupingControllerIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aligner}>
          <div className={styles.distributor}>
            <div className={styles.ruler} />
            <div className={styles.guidesManager}>
              <div className={styles.gridGenerator}>
                <div className={styles.termsOfUse}>Terms of use</div>
                <div className={styles.privacy}>Privacy</div>
                <div className={styles.cookiePolicy}>Cookie policy</div>
                <div className={styles.sitemap}>Sitemap</div>
              </div>
              <div className={styles.ajaksTowing1}>2023 Ajaks Towing , Inc</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DataFlowController;
