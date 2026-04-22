import styles from './Reservas.module.css'
//https://youtu.be/nYkfP2lSpM4?si=-OrJ3DgHVHAwQhJE

function Reservas (){
    return(
        <div className={styles.body}>
            <div className={styles.datepicker}>

                <input type="text" placeholder='Selecione uma data'/>

                <div className={styles.calendar}>

                    <div className={styles.leftSide}>

                        <div className={styles.controls}>
                            <button className={styles.prev}><i class="fi fi-rr-arrow-small-left"></i></button>
                            <strong className={styles.label}>Month YYYY</strong>
                        </div>

                        <div className={styles.days}>
                            <span>D</span>
                            <span>S</span>
                            <span>T</span>
                            <span>Q</span>
                            <span>Q</span>
                            <span>S</span>
                            <span>S</span>
                        </div>
                        <div className={styles.dates}>
                            <span className={styles.disabled}>1</span>
                            <span className={styles.disabled}>2</span>
                            <span className={styles.disabled}>3</span>
                            <span className={styles.disabled}>4</span>
                            <span className={styles.disabled}>5</span>
                            <span className={styles.disabled}>6</span>
                            <span className={styles.disabled}>7</span>
                            <span className={styles.disabled}>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>
                            <span>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>
                            <span>31</span>
                            <span>32</span>
                            <span>33</span>
                            <span>34</span>
                            <span className={styles.disabled}>35</span>
                            <span className={styles.disabled}>36</span>
                            <span className={styles.disabled}>37</span>
                            <span className={styles.disabled}>38</span>
                            <span className={styles.disabled}>39</span>
                            <span className={styles.disabled}>40</span>
                            <span className={styles.disabled}>41</span>
                            <span className={styles.disabled}>42</span>
                        </div>
                    </div>

                    <div className={styles.rightSide}>

                        <div className={styles.controls}>
                            <button className={styles.next}><i class="fi fi-rr-arrow-small-right"></i></button>
                            <strong className={styles.label}>Month YYYY</strong>
                        </div>

                        <div className={styles.days}>
                            <span>D</span>
                            <span>S</span>
                            <span>T</span>
                            <span>Q</span>
                            <span>Q</span>
                            <span>S</span>
                            <span>S</span>
                        </div>
                        <div className={styles.dates}>
                            <span className={styles.disabled}>1</span>
                            <span className={styles.disabled}>2</span>
                            <span className={styles.disabled}>3</span>
                            <span className={styles.disabled}>4</span>
                            <span className={styles.disabled}>5</span>
                            <span className={styles.disabled}>6</span>
                            <span className={styles.disabled}>7</span>
                            <span className={styles.disabled}>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span className={styles.rangeStart}>12</span>
                            <span className={styles.inRange}>13</span>
                            <span className={styles.inRange}>14</span>
                            <span className={styles.inRange}>15</span>
                            <span className={styles.inRange}>16</span>
                            <span className={styles.inRange}>17</span>
                            <span className={styles.inRange}>18</span>
                            <span className={styles.inRange}>19</span>
                            <span className={styles.inRange}>20</span>
                            <span className={styles.inRange}>21</span>
                            <span className={styles.inRange}>22</span>
                            <span className={styles.rangeEnd}>23</span>
                            <span className={styles.Today}>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>
                            <span>31</span>
                            <span>32</span>
                            <span>33</span>
                            <span>34</span>
                            <span className={styles.disabled}>35</span>
                            <span className={styles.disabled}>36</span>
                            <span className={styles.disabled}>37</span>
                            <span className={styles.disabled}>38</span>
                            <span className={styles.disabled}>39</span>
                            <span className={styles.disabled}>40</span>
                            <span className={styles.disabled}>41</span>
                            <span className={styles.disabled}>42</span>
                        </div>
                    </div>

                    <div className={styles.actionMenu}>
                        <span className={styles.selection}>MM/DD/YYYY - MM/DD/YYYY</span>
                        <button className={styles.cancel}>Cancel</button>
                        <button className={styles.apply}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservas